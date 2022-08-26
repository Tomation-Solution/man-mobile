import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import RoundedButton from "../components/button/RoundedButton";
import { RegisterAsMember } from "../connection/actions/authentication/authentication";
import {
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { ConvertObjectToArray } from "../components/utilitiyFunctions";

const Register = ({ navigation, route }) => {
  const newMember = route.params.user;

  const [loading, setLoading] = useState(false);
  const [signUpData, setSignUpData] = useState(newMember);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const offsetVertical = useSharedValue(0);

  useEffect(() => {
    const keyboardListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });

    const removeKeyboardListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardStatus(false);
        offsetVertical.value = -10;
      }
    );

    return () => {
      keyboardListener.remove();
      removeKeyboardListener.remove();
    };
  }, []);

  const callback = () => {
    navigation.navigate("dashboard");
    setLoading(false);
  };

  const errCallback = (res) => {
    alert("One or more fields is empty");
    console.log(res);
    setLoading(false);
  };

  const handleSignUp = () => {
    if (setSignUpData.firstname !== null && setSignUpData.lastname !== null) {
      setLoading(true);
      RegisterAsMember(signUpData, callback, errCallback);
    }
  };

  const scrollUp = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetVertical.value }],
    };
  }, []);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateY = offsetVertical.value;
    },
    onActive: (event, context) => {
      keyboardStatus
        ? (offsetVertical.value = event.translationY + context.translateY)
        : null;
    },
    onEnd: (event) => {},
  });

  
  const objectLength = ConvertObjectToArray(signUpData).length;
  const starting = 0;
  const half = objectLength/2;

  const MemberInput = ({start,half,length}) => {
    // const firstArrEnd = length/2
    for (let index = 0; index < length; index++) {
      if (index === start) {
        return ConvertObjectToArray(signUpData)
          .slice(index, half)
          .map((val) => (
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>{val.name}</Text>
              <TextInput
                placeholder={val.name}
                style={tw`py-1.5`}
                defaultValue={val.name}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, [val.name]: text })
                }
              />
            </View>
          ));
      } else {
        return ConvertObjectToArray(signUpData)
          .slice(half+1, length)
          .map((val) => (
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>{val.name}</Text>
              <TextInput
                placeholder={val.name}
                style={tw`py-1.5`}
                defaultValue={val.name}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, [val.name]: text })
                }
              />
            </View>
          ));
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={
        // !keyboardStatus ? null :
        gestureHandler
      }
    >
      <Animated.View style={scrollUp}>
        <Image
          style={tw`mx-auto my-8`}
          source={require("../images/Logo/ANNILogo.png")}
        />
        <View style={tw`mx-10`}>
          <Text style={tw`text-base font-bold`}>Register</Text>

          <Text>Input details to register</Text>
        </View>

        <View style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>
          <View>
            {/* <View style={tw`flex-row justify-between`}>
              <View style={tw`my-2 w-5/12 border-b`}>
                <Text>First Name</Text>
                <TextInput
                  placeholder="First Name"
                  style={tw`py-1.5`}
                  defaultValue={signUpData.firstname}
                  onChangeText={(text) =>
                    setSignUpData({ ...signUpData, firstname: text })
                  }
                />
              </View>
              <View style={tw`my-2 w-5/12 border-b`}>
                <Text>Last Name</Text>
                <TextInput
                  placeholder="Last Name"
                  defaultValue={signUpData.lastname}
                  style={tw`py-1.5`}
                  onChangeText={(text) =>
                    setSignUpData({ ...signUpData, lastname: text })
                  }
                />
              </View>
            </View>

            <View style={tw`my-2 border-b`}>
              <Text>Email Address</Text>
              <TextInput
                style={tw`py-1.5`}
                defaultValue={newMember["email"]}
                placeholder="email Address"
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, email: text })
                }
              />
            </View>
            <View style={tw`my-2 border-b`}>
              <Text>Password</Text>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={tw`py-1.5`}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, password: text })
                }
              />
            </View> */}
            <MemberInput start={starting} half={half} length={objectLength} />
          </View>

          <View style={tw`flex-row justify-between`}>
            {/* <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Phone Number</Text>
              <TextInput
                placeholder="Phone Number"
                style={tw`py-1.5`}
                defaultValue={newMember["Phone"].toString()}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, phone: text })
                }
              />
            </View>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Graduation Year</Text>
              <TextInput
                placeholder="graduation Year"
                style={tw`py-1.5`}
                defaultValue={newMember["Graduation Year"].toString()}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, graduation_year: text })
                }
              />
            </View> */}
            <MemberInput start={half} half={half} length={objectLength} />
          </View>

          <View style={tw`flex-row justify-between`}>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Department</Text>
              <TextInput
                placeholder="Department"
                defaultValue={newMember["Department"]}
                style={tw`py-1.5`}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, department: text })
                }
              />
            </View>
            <View style={tw`my-2 w-5/12 border-b`}>
              <Text>Chapter</Text>
              <TextInput
                placeholder="Chapter"
                style={tw`py-1.5`}
                onChangeText={(text) =>
                  setSignUpData({ ...signUpData, chapter: text })
                }
              />
            </View>
          </View>

          <View style={tw`mt-3`}>
            {loading ? (
              <ActivityIndicator color="purple" size="large" />
            ) : (
              <RoundedButton text="Register" pressed={() => handleSignUp()} />
            )}
          </View>

          {/* <Text>Forgot Password?</Text> */}
          <View style={tw`flex-row mx-auto py-2`}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={tw`text-green-800 font-bold`}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Register;
