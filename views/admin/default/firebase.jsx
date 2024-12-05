import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZK4oL5UhxCfPInHTmkWqwdBCUdtbNoKM",
    authDomain: "mediot-d221e.firebaseapp.com",
    databaseURL: "https://mediot-d221e-default-rtdb.firebaseio.com",
    projectId: "mediot-d221e",
    storageBucket: "mediot-d221e.appspot.com",
    messagingSenderId: "952319402717",
    appId: "1:952319402717:web:7feee09ba9634dd65d7134",
    measurementId: "G-4WR7XR4D6K"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const useFirebaseData = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [spO2, setSpO2] = useState(null);
  const [bloodPressure, setBloodPressure] = useState(null);
  const [bloodGlucose, setBloodGlucose] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [ecg, setEcg] = useState(null);

  useEffect(() => {
    // Getting references to the data
    const heartRateRef = ref(database, 'HealthData/HeartRate');
    const spO2Ref = ref(database, 'HealthData/SpO2');
    const bloodPressureRef = ref(database, 'HealthData/SystolicBP');
    const bloodGlucoseRef = ref(database, 'HealthData/BloodGlucose');
    const temperatureRef = ref(database, 'HealthData/Temperature');
    // console.log(temperatureRef);
    const ecgRef = ref(database, 'HealthData/ECGValue');
    // console.log(ecgRef);

    // Fetch Heart Rate data
    onValue(heartRateRef, (snapshot) => {
      const heartRateData = snapshot.val();
      setHeartRate(heartRateData);
    });

    // Fetch SpO2 data
    onValue(spO2Ref, (snapshot) => {
      const spO2Data = snapshot.val();
      setSpO2(spO2Data);
    });

    // Fetch Blood Pressure data
    onValue(bloodPressureRef, (snapshot) => {
      const bloodPressureData = snapshot.val();
      setBloodPressure(bloodPressureData);
    });

    // Fetch Blood Glucose data
    onValue(bloodGlucoseRef, (snapshot) => {
      const bloodGlucoseData = snapshot.val();
      setBloodGlucose(bloodGlucoseData);
    });

    onValue(ecgRef, (snapshot) => {
        const ecgData = snapshot.val();
        setEcg(ecgData);
      });

      onValue(temperatureRef, (snapshot) => {
        const tempData = snapshot.val();
        setTemperature(tempData);
      });
  }, []);

  // Return all the data
  return { heartRate, spO2, bloodPressure, bloodGlucose ,ecg,temperature};
};
