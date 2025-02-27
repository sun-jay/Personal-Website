import React, { useEffect } from 'react';

const EarthMarsLaserSimulation = () => {
  useEffect(() => {
    // ----------------------------------------------------------
    // Earth-Mars simulation (same as in your original HTML):
    // ----------------------------------------------------------
    const canvas = document.getElementById('simCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Pause toggle
    let paused = false;
    const pauseButton = document.getElementById('pauseButton');
    // Set the button text to "Resume" at start, but keep paused = false (running)
    pauseButton.textContent = 'Resume';
    pauseButton.addEventListener('click', () => {
      paused = !paused;
      // If paused is now true, label is "Resume" (to unpause). If false, label is "Pause".
      pauseButton.textContent = paused ? 'Resume' : 'Pause';
    });

    // Red-beam toggle
    let redBeamEnabled = true;
    const redBeamButton = document.getElementById('redBeamButton');
    redBeamButton.addEventListener('click', () => {
      redBeamEnabled = !redBeamEnabled;
      redBeamButton.textContent = redBeamEnabled ? 'Disable Red Beam' : 'Enable Red Beam';
    });

    // Helpers
    function getCenter() {
      return { x: canvas.width / 2, y: canvas.height / 2 };
    }
    function distance(x1, y1, x2, y2) {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    }

    // ----- Simulation Constants -----
    const AU = 150; // 1 AU = 150 px

    // Radii
    const earthRadius = 10;
    const sunRadius   = earthRadius * 2;
    const marsRadius  = 8;
    const mirrorRadius = 5; // L4 mirror size

    // Orbits
    const earthOrbitRadius = 1.0 * AU;
    const marsOrbitRadius  = 1.524 * AU;

    // Periods
    const earthPeriodSim = 12;               // Earth in 12s
    const marsPeriodSim  = earthPeriodSim * 1.88; // ~22.56s

    // Angular velocities
    const earthAngularVelocity = (2*Math.PI) / earthPeriodSim;
    const marsAngularVelocity  = (2*Math.PI) / marsPeriodSim;

    // Offsets
    const marsStartOffset = Math.PI / 4; // so they're not aligned
    const l4Offset        = Math.PI / 3; // +60° => Mars L4

    // Speed of light: 3x Mars velocity
    const vMars = marsAngularVelocity * marsOrbitRadius;
    const lightSpeedSim = vMars * 3;

    // Positions
    let earthX, earthY;
    let marsX, marsY;
    let mirrorX, mirrorY; // L4 mirror

    // Time
    let totalElapsedTime = 0;
    let lastFrameTimestamp = null;

    // Photon arrays
    // 1) Direct Mars->Earth (green)
    // 2) Mars->L4 (red)
    // 3) L4->Earth (red)
    const marsToEarthPhotons = [];
    const marsToL4Photons    = [];
    const l4ToEarthPhotons   = [];

    // Spawn intervals
    let lastMarsEarthSpawnTime = 0;
    let lastMarsL4SpawnTime    = 0;
    const spawnIntervalMarsEarth = 0.24;
    const spawnIntervalMarsL4    = 0.24;

    // ------------------------------
    // updateSimulation
    // ------------------------------
    function updateSimulation(dt) {
      totalElapsedTime += dt;
      const { x: centerX, y: centerY } = getCenter();

      // --- Planet Positions ---
      const earthAngle = earthAngularVelocity * totalElapsedTime;
      earthX = centerX + earthOrbitRadius * Math.cos(earthAngle);
      earthY = centerY + earthOrbitRadius * Math.sin(earthAngle);

      const marsAngle = marsAngularVelocity * totalElapsedTime + marsStartOffset;
      marsX = centerX + marsOrbitRadius * Math.cos(marsAngle);
      marsY = centerY + marsOrbitRadius * Math.sin(marsAngle);

      // Mirror (L4) always 60° ahead of Mars
      const mirrorAngle = marsAngle + l4Offset;
      mirrorX = centerX + marsOrbitRadius * Math.cos(mirrorAngle);
      mirrorY = centerY + marsOrbitRadius * Math.sin(mirrorAngle);

      // --- 1) Spawn direct green Mars->Earth beams ---
      const sinceSpawnME = totalElapsedTime - lastMarsEarthSpawnTime;
      if (sinceSpawnME >= spawnIntervalMarsEarth) {
        // Leading Earth
        const distME = distance(marsX, marsY, earthX, earthY);
        const tFlight = distME / lightSpeedSim;
        const arrivalTime = totalElapsedTime + tFlight;
        const earthAngleFinal = earthAngularVelocity * arrivalTime;
        const eFx = centerX + earthOrbitRadius * Math.cos(earthAngleFinal);
        const eFy = centerY + earthOrbitRadius * Math.sin(earthAngleFinal);

        marsToEarthPhotons.push({
          startX: marsX,
          startY: marsY,
          endX: eFx,
          endY: eFy,
          spawnTime: totalElapsedTime,
          travelTime: tFlight,
          color: 'green'
        });
        lastMarsEarthSpawnTime = totalElapsedTime;
      }

      // --- 2) Spawn red Mars->L4 beams ---
      if (redBeamEnabled) {
        const sinceSpawnML4 = totalElapsedTime - lastMarsL4SpawnTime;
        if (sinceSpawnML4 >= spawnIntervalMarsL4) {
          const distML4 = distance(marsX, marsY, mirrorX, mirrorY);
          const tFlight = distML4 / lightSpeedSim;
          const arrivalTime = totalElapsedTime + tFlight;
          const l4AngleFinal = (marsAngularVelocity * arrivalTime + marsStartOffset) + l4Offset;
          const l4Fx = centerX + marsOrbitRadius * Math.cos(l4AngleFinal);
          const l4Fy = centerY + marsOrbitRadius * Math.sin(l4AngleFinal);

          marsToL4Photons.push({
            startX: marsX,
            startY: marsY,
            endX: l4Fx,
            endY: l4Fy,
            spawnTime: totalElapsedTime,
            travelTime: tFlight,
            color: 'red'
          });
          lastMarsL4SpawnTime = totalElapsedTime;
        }
      }

      // --- 3) Update direct Mars->Earth photons ---
      for (let i = marsToEarthPhotons.length - 1; i >= 0; i--) {
        const p = marsToEarthPhotons[i];
        const tSinceSpawn = totalElapsedTime - p.spawnTime;
        if (tSinceSpawn >= p.travelTime) {
          marsToEarthPhotons.splice(i, 1);
        }
      }

      // --- 4) Update Mars->L4. If arrived, spawn red L4->Earth beams ---
      for (let i = marsToL4Photons.length - 1; i >= 0; i--) {
        const p = marsToL4Photons[i];
        const tSinceSpawn = totalElapsedTime - p.spawnTime;
        if (tSinceSpawn >= p.travelTime) {
          const arrivalTime = p.spawnTime + p.travelTime;
          const l4AngleArr = (marsAngularVelocity * arrivalTime + marsStartOffset) + l4Offset;
          const l4Ax = centerX + marsOrbitRadius * Math.cos(l4AngleArr);
          const l4Ay = centerY + marsOrbitRadius * Math.sin(l4AngleArr);

          const earthAngleArr = earthAngularVelocity * arrivalTime;
          const eAx = centerX + earthOrbitRadius * Math.cos(earthAngleArr);
          const eAy = centerY + earthOrbitRadius * Math.sin(earthAngleArr);

          const distL4E = distance(l4Ax, l4Ay, eAx, eAy);
          const tFlightL4E = distL4E / lightSpeedSim;
          const finalArrivalTime = arrivalTime + tFlightL4E;
          const earthAngleFinal = earthAngularVelocity * finalArrivalTime;
          const eFx = centerX + earthOrbitRadius * Math.cos(earthAngleFinal);
          const eFy = centerY + earthOrbitRadius * Math.sin(earthAngleFinal);

          if (redBeamEnabled) {
            l4ToEarthPhotons.push({
              startX: l4Ax,
              startY: l4Ay,
              endX: eFx,
              endY: eFy,
              spawnTime: arrivalTime,
              travelTime: tFlightL4E,
              color: 'red'
            });
          }
          marsToL4Photons.splice(i, 1);
        }
      }

      // --- 5) Update L4->Earth photons ---
      for (let i = l4ToEarthPhotons.length - 1; i >= 0; i--) {
        const p = l4ToEarthPhotons[i];
        const tSinceSpawn = totalElapsedTime - p.spawnTime;
        if (tSinceSpawn >= p.travelTime) {
          l4ToEarthPhotons.splice(i, 1);
        }
      }
    }

    // ------------------------------
    // drawScene
    // ------------------------------
    function drawScene() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const { x: centerX, y: centerY } = getCenter();

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, earthOrbitRadius, 0, 2*Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerX, centerY, marsOrbitRadius, 0, 2*Math.PI);
      ctx.stroke();

      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(centerX, centerY, sunRadius, 0, 2*Math.PI);
      ctx.fill();

      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(earthX, earthY, earthRadius, 0, 2*Math.PI);
      ctx.fill();

      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(marsX, marsY, marsRadius, 0, 2*Math.PI);
      ctx.fill();

      ctx.fillStyle = 'silver';
      ctx.beginPath();
      ctx.arc(mirrorX, mirrorY, mirrorRadius, 0, 2*Math.PI);
      ctx.fill();

      drawPhotons(marsToEarthPhotons);
      drawPhotons(marsToL4Photons);
      drawPhotons(l4ToEarthPhotons);
    }

    function drawPhotons(photonArray) {
      for (let i = 0; i < photonArray.length; i++) {
        const p = photonArray[i];
        const tSinceSpawn = totalElapsedTime - p.spawnTime;
        const progress = tSinceSpawn / p.travelTime;
        if (progress < 1) {
          if (!redBeamEnabled && p.color === 'red') continue;
          const px = p.startX + (p.endX - p.startX) * progress;
          const py = p.startY + (p.endY - p.startY) * progress;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, 2*Math.PI);
          ctx.fill();
        }
      }
    }

    // ------------------------------
    // animate
    // ------------------------------
    function animate(timestamp) {
      if (!lastFrameTimestamp) {
        lastFrameTimestamp = timestamp;
      }
      requestAnimationFrame(animate);
      const dt = (timestamp - lastFrameTimestamp) / 1000;
      lastFrameTimestamp = timestamp;
      if (!paused) {
        updateSimulation(dt);
      }
      drawScene();
    }
    requestAnimationFrame(animate);

    // Minimal Tests
    function testPhotonInterpolation() {
      const testPhoton = {
        startX: 0, startY: 0,
        endX: 10, endY: 0,
        spawnTime: 0,
        travelTime: 2,
        color: 'green'
      };
      const timeSinceSpawn = 1;
      const progress = timeSinceSpawn / testPhoton.travelTime;
      const px = testPhoton.startX + (testPhoton.endX - testPhoton.startX) * progress;
      console.assert(px === 5, `Photon x pos expected 5, got ${px}`);
    }
    testPhotonInterpolation();

    function testPauseToggle() {
      paused = false;
      console.assert(paused === false, 'Pause should be false initially');
      paused = !paused;
      console.assert(paused === true, 'Pause should be true after toggle');
    }
    testPauseToggle();
    //click the resume button to unpause

    pauseButton.click();

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
          width: 100%;
          background-color: black;
        }
        #simCanvas {
          display: block;
        }
        #controls {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 9999;
          display: flex;
          gap: 8px;
        }
        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          background-color: #444;
          color: white;
        }
        button:hover {
          background-color: #666;
        }
      `}</style>

      <div className='flex flex-col items-center justify-center h-screen'>
      <div className = "pt-16" id="controls">
        <button id="pauseButton">Pause</button>
        <button id="redBeamButton">Disable Red Beam</button>
      </div>
      <canvas className='w-4/4' id="simCanvas"></canvas>
      </div>
    </>
  );
};

export default EarthMarsLaserSimulation;
