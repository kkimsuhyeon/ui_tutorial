import "./style.css";

document.querySelector(".stopwatch").onclick = (() => {
  let isRunning = false;
  let elapsedTime = { mm: 0, ss: 0, ms: 0 };
  let laps = [];

  const [$btnStartOrStop, $btnResetOrLap] = document.querySelectorAll(
    ".stopwatch > .control"
  );

  const formatElapsedTime = (() => {
    const format = (n) => (n < 10 ? "0" + n : n + "");
    return ({ mm, ss, ms }) => `${format(mm)}:${format(ss)}:${format(ms)}`;
  })();

  const renderElapsedTime = (() => {
    const $display = document.querySelector(".stopwatch > .display");
    return () => {
      $display.textContent = formatElapsedTime(elapsedTime);
    };
  })();

  const renderLaps = (() => {
    const $laps = document.querySelector(".stopwatch > .laps");

    const createLapElement = (newLap, index) => {
      const $fragment = document.createDocumentFragment();
      // 외부에 뭔가 경량화된 노드를 만든다고 한다 -> 코드 다 친후에 확인해봐야함

      const $index = document.createElement("div");
      $index.textContent = index;
      $fragment.appendChild($index);

      const $newLab = document.createElement("div");
      $newLab.textContent = formatElapsedTime(newLap);

      $laps.appendChild($fragment);

      $laps.style.display = "grid";
    };

    const removeAllLapElement = () => {
      document
        .querySelectorAll(".laps > div:not(.lap-title)")
        .forEach(($lap) => $lap.remove());
      $laps.style.display = "none";
    };

    return () => {
      const { length } = laps;

      if (length) {
        const newLap = laps[length - 1]; // 마지막 lap을 DOM에 append한다.
        createLapElement(newLap, length);
      } else {
        removeAllLapElement();
      }
    };
  })();

  // Start/Stop 버튼 클릭 이벤트 핸들러
  const handleBtnStartOrStop = (() => {
    let timerId = null;

    // Stop => Start
    const start = () => {
      let { mm, ss, ms } = elapsedTime;

      timerId = setInterval(() => {
        ms += 1;
        if (ms >= 100) {
          ss += 1;
          ms = 0;
        }
        if (ss >= 60) {
          mm += 1;
          ss = 0;
        }

        // $btnResetOrLap의 disabled 상태 변경
        $btnResetOrLap.disabled = !(mm + ss + ms);

        elapsedTime = { mm, ss, ms };
        renderElapsedTime();
      }, 10); // 10ms 단위로 증가
    };

    // Start => Stop
    const stop = () => clearInterval(timerId);

    return () => {
      isRunning ? stop() : start();
      isRunning = !isRunning;

      // isRunning이 변경되면 버튼 텍스트를 변경한다.
      $btnStartOrStop.textContent = isRunning ? "Stop" : "Start";
      $btnResetOrLap.textContent = isRunning ? "Lap" : "Reset";
    };
  })();

  // Reset/Lap 버튼 클릭 이벤트 핸들러
  const handleBtnResetOrLap = (() => {
    // elapsedTime과 laps를 초기화한다.
    const reset = () => {
      // $btnResetOrLap의 disabled 상태 변경
      $btnResetOrLap.disabled = true;

      elapsedTime = { mm: 0, ss: 0, ms: 0 };
      renderElapsedTime();

      laps = [];
      renderLaps();
    };

    // elapsedTime을 laps에 추가한다.
    const addLap = () => {
      laps = [...laps, elapsedTime];
      renderLaps();
    };

    return () => {
      isRunning ? addLap() : reset();
    };
  })();

  return ({ target }) => {
    if (!target.classList.contains("control")) return;
    target === $btnStartOrStop ? handleBtnStartOrStop() : handleBtnResetOrLap();
  };
})();
