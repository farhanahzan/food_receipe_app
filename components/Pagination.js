import { View, Text } from 'react-native'
import React from 'react'
import { CircleButton } from './Button'
import { assets } from '../constants'

const Pagination = ({pagination, setPagination, increment}) => {
    const handlePrev =() =>{
        if(pagination === 0){
            return
        }else{
            setPagination(pagination-increment);

        }
    }
    const handlenext =() =>{
        setPagination(pagination+increment)
    }
  return (
    <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'flex-start'}}>
      <CircleButton imgUrl={assets.left} handlePress={handlePrev}  marginRight={60}/>
      <CircleButton imgUrl={assets.right} handlePress={handlenext} marginLeft={60}/>


    </View>
  )
}

export default Pagination