import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {
const [toDo, setToDo] = useState('')
const [toDos, setToDos] = useState([])

const addToDo =() => {
  console.log(toDos);
let temp = [...toDos]
temp.push(toDo)
setToDos([...temp])
setToDo('')
}

const displayToDos = () => (
  toDos.map((el,i)=> (
    <View 
   style={styles.todo}
    > 
    <Text 
    
    key={i}>{el}</Text>
    <Button
    onPress={()=>removeToDo(i)}
    title='x'
    color= "red"
    />
</View>
  
  ))
)

const removeToDo = (idx) => {
  let temp = [...toDos]
  temp.splice(idx,1)
  setToDos([...temp])

}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput 
      multiline
      style={styles.input}
      value={toDo}
      onChangeText={(text)=>setToDo(text)}
      />
    <TouchableOpacity
    style={styles.button}
    onPress={addToDo}
    >
    <Text>ADD</Text></TouchableOpacity>
    {displayToDos()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(172,172,240,0.7)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title:{
marginVertical: 50,
    fontSize: 30,
  },
  input: {
    height:60,
    width:'90%',
    borderWidth: 1,
  },
  button: {
    marginTop: 5,
paddingVertical:10,
   paddingHorizontal: 20,
    borderWidth:1,
    borderRadius: 10,
    backgroundColor: "rgba(220,220,200,0.7)"
  },
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '90%',
    marginTop: 20, 
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderWidth: 1,
    fontSize: 15,
    color: "black",
  },
 
});
