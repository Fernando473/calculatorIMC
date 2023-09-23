import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("0");
  const [estatura, setEstatura] = useState("0");
  const [resultado, setResultado] = useState("0");
  const [message, setMessage] = useState("");

  const calcularPeso = () => {
    const pesoEnKg = parseFloat(peso);
    const estaturaEnMetros = parseFloat(estatura) / 100;

    if (isNaN(pesoEnKg) || isNaN(estaturaEnMetros)) {
      setMessage("Ingresa valores válidos para peso y estatura.");
      setResultado("");
      return;
    }

    const imc = pesoEnKg / Math.pow(estaturaEnMetros, 2);

    setResultado(`Tu IMC es: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      setMessage("Tienes bajo peso.");
    } else if (imc >= 18.5 && imc < 25.0) {
      setMessage("Tienes un peso normal.");
    } else if (imc >= 25 && imc < 30) {
      setMessage("Tienes sobrepeso.");
    } else {
      setMessage("Tienes obesidad.");
    }
  };

  const limpiarCampos = () => {
    setMessage("");
    setEstatura(""); 
    setPeso("");     
    setResultado("");
  };
  

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>Calculadora IMC</Text>
      <View style={styles.viewContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Estatura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu estatura en cm"
          onChangeText={setEstatura}
          value={estatura}
        />
      </View>

      <View style={styles.viewContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Peso</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu peso en kg"
          onChangeText={setPeso}
          value={peso}
        />
      </View>

      <View style={styles.buttonView}>
        <Button title="Calcular" onPress={calcularPeso} />
        <Button title="Limpiar campos" onPress={limpiarCampos} />
      </View>
      <Text>{resultado}</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    height: 40,
  },
  buttonView: {
    flexDirection:"row",
    gap:7,
    margin:10
  },
});
