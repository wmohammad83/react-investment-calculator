export default function UserInput() {
  return (
    <div id="user-input" className="center">
      <div className="input-group">
        <div className="">
          <label id="" htmlFor="initial-investment">
            Initial Investment
          </label>
          <input id="initial-investment" type="number" />
        </div>

        <div className="">
          <label id="" htmlFor="annual-investment">
            Annual Investment
          </label>
          <input id="annual-investment" type="number" />
        </div>
      </div>

      <div className="input-group">
        <div className="">
          <label id="" htmlFor="expected-return">
            Expected Return
          </label>
          <input id="expected-return" type="number" />
        </div>

        <div className="">
          <label id="" htmlFor="duration">
            Duration
          </label>
          <input id="duration" type="number" />
        </div>
      </div>
    </div>
  );
}
