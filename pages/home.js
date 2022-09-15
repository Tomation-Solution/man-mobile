import { View, Text, TextInput, FlatList,SafeAreaView, ScrollView, Image, StatusBar, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NewsCard from '../components/News/NewsCard'
import TobBar from '../components/topBar'
import TodoList from '../components/committee/todoList'
import {
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { GetGallery, GetNews, GetPublications, LikeDisLikeNews } from '../connection/actions/user.actions'

const Home = ({navigation, route}) => {

  const [news, setNews] = useState(null)
  const [publications,setPublications] = useState([]);
  const [gallery,setGallery] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const offsetHorizontal = useSharedValue(0);

  useEffect(()=>{
    setRefresh(!refresh)
    setTimeout(
        function() {
    GetNews(callback)
    GetPublications(pCallback)
    GetGallery(false, gcallback,gerrcallback)
        }, 1500);
  },[])

  const gcallback = (res) => {
    const reverseArr = res.data.reverse()
    setGallery(reverseArr)
  }

  const gerrcallback = (res) => {
    console.log("error occured")
  }

  // console.log('gallery',gallery)

  const likeNews=(data) =>{
    // console.log(like,data)
    LikeDisLikeNews({id: data.id, like:'true', dislike:'false'})
  }

  const callback=(res)=>{
    setNews(res)
  }
  const pCallback= (res) => {
    setPublications(res.data.data)
  }

  const scrollHorizontal = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetHorizontal.value }],
    };
  }, []);
  const glength = gallery.length

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event,context) => {
      context.translateX = offsetHorizontal.value
    },
    onActive: (event,context) => {
        offsetHorizontal.value = event.translationX + context.translateX
    },
    onEnd: (event,context) => {
      const end = (-332 * glength) + 332
      if(offsetHorizontal.value > 0){
        offsetHorizontal.value = withSpring(0)
      }
      if(end > offsetHorizontal.value){
        offsetHorizontal.value = withSpring(end)
      }
    }
  })

  const UpperComponent=(props)=>{
    return(
      <View>
        {props.show ? <View>
          <Text style={tw`text-base font-bold my-2 mt-6`}> Feeds </Text>
          <View style={tw`flex-row justify-between px-5`}>
            <Pressable onPress={()=>navigation.navigate('events')}>
              <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
              <Text style={tw`text-xs`}>Events</Text>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('gallery')}>
              <FontAwesome name='photo' style={tw`text-center pb-2`} color='#C4C4C4' size={30} />
              <Text style={tw`text-xs`}>Gallery</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('publication')}>
              <Ionicon name='book' style={tw`text-center pb-2`} color='#C4C4C4' size={30}/>
              <Text style={tw`text-xs`}>Publications</Text>
            </Pressable>
          </View>
          </View> : null}

          <View style={tw`flex-row my-3 bg-green-800 mt-7 justify-between p-2 rounded-lg`}>
            <Text style={tw`font-bold text-white`}>{props.textTitle}</Text>
            <Text style={tw`text-xs text-white`}>See All ({props.count})</Text>
          </View>
          <View style={tw` flex-row mt-0 `}></View>
      </View>
    )
    }


  return (
    <SafeAreaView style={tw`mx-3`}>
      <StatusBar backgroundColor={'#365C2A'} showHideTransition='slide'/>
      {/* <Text>home</Text> */}
      <TobBar
        body={
          <View style={tw`flex-row justify-between `}>
            <View>
              <Ionicon  name='menu' onPress={()=>navigation.toggleDrawer()} size={34}/>
            </View>
            <View style={{flexGrow: 2}}></View>
            {/* <Text  style={tw`my-auto px-4`}>Welcome Rasheed</Text> */}
            <Pressable style={{flexGrow: 0.1}} onPress={()=>navigation.navigate('profile')}>
              <Image style={tw`h-8 w-8 rounded-full`} source={require('../images/user.png')}/>
            </Pressable>
            <Ionicon name='notifications' onPress={()=>navigation.navigate('notifications')} size={28} color='#365C2A'/>
          </View>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`flex-row bg-green-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search'
          style={tw`w-9/12`}
        />
      </View>

      {/* <View> */}
        
        <FlatList
            data={news}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            // ListFooterComponent={<View style={tw`h-32`}></View>}
            ListHeaderComponent={
              <View>
                {!route.params || route.params.type != 'committee' ?
                <>
                    <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
                  <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[tw`flex-row`,scrollHorizontal]}>
                      {gallery.map((image) =><Image style={tw`h-32 mx-3 w-11/12 rounded-lg`} source={{uri: image.photo_file}}/>)}
                    </Animated.View>
                  </PanGestureHandler>
                  </>
                 : 
                 null
                 }

                 {/* feeds: quick links */}
                <UpperComponent textTitle='News' show={true} count={news !== null ? news.length : 0}/>
              </View>
            }
            renderItem={
                ({item}) => (
                  
                  <NewsCard 
                        image={item.image}
                        head={item.name}
                        // body={item.body}
                        item={item}
                        navigation = {navigation}
                        isLiked={item.likes}
                        pressLike={()=>likeNews(item)}
                        pressDisLike={()=>alert('like')}
                        to='viewNews'
                  />
                  )}/>

        <FlatList
            data={publications}
            // style={{borderStyle: 'solid', borderWidth: 1,}}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            ListFooterComponent={<View style={tw`h-12`}></View>}
            ListHeaderComponent={
              <View>
                {/* {!route.params || route.params.type != 'committee' ?
                <View>
                  <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
                  <Image style={tw`h-32 w-full rounded-lg`} source={require('../images/onboarding/network.png')}/>
                </View> 
                 : 
                 <TodoList data={todoData}/>} */}

                 {/* feeds: quick links */}
                <UpperComponent textTitle='Publications' show={false} count={publications.length < 1 !== null ? publications.length : 0}/>
              </View>
            }
            renderItem={
                ({item}) => (
                  
                  <NewsCard 
                        image={item.image}
                        head={item.name}
                        body={item.body}
                        item={item}
                        navigation = {navigation}
                        isLiked={item.likes}
                        pressLike={()=>likeNews(item)}
                        pressDisLike={()=>alert('like')}
                        to='viewPublication'
                  />
                  )}/>
        {/* </View> */}
      {/* // </View> */}
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home