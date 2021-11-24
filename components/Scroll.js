import React, { useRef } from 'react';
import { ScrollView, View, Button } from 'react-native';

export default function scrollTo() {
  	const scrollRef = useRef();
  
  	const handleClick = number => {
    	scrollRef.current.ScrollTo({
          y: (100 * number),
          animated: true,
    };
  
	return (
      <ScrollView ref={scrollRef} >
      	<View style={{height: '100px'}}>
      		<Button onPress={() => handleClick(1) title="1"/>
		</View>
		<View style={{height: '100px'}}>
      		<Button onPress={() => handleClick(2) title="2"/>
		</View>
		<View style={{height: '100px'}}>
      		<Button onPress={() => handleClick(3) title="3"/>
		</View>
		<View style={{height: '100px'}}>
      		<Button onPress={() => handleClick(4) title="4"/>
		</View>
		<View style={{height: '100px'}}>
      		<Button onPress={() => handleClick(5) title="5"/>
		</View>
      </ScrollView>
    );
}