import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisbility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisbility(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisbility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
