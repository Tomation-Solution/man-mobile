import Container from "./../../../components/Container";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Formbtn, AccountHeader } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { validateUser } from "../../../store/slices/auth/loginSlice";

const VerifyUser = ({ navigation }: any) => {
  const { loading, isUserValidated, message } = useAppSelector(
    (state) => state.authReducers.login
  );

  const [input, setInput] = useState<string>();
  const [newInput, setNewInput] = useState<string>(input!);
  const dispatch = useAppDispatch();

  const onVerify = () => {
    setNewInput(input!);
    dispatch(validateUser({ MEMBERSHIP_NO: input }));
    console.log(newInput);
  };

  useEffect(() => {
    if (isUserValidated) {
      setInput("");
      navigation.navigate("Registration", { data: newInput });
    }
  }, [isUserValidated, loading]);

  return (
    <>
      <Container>
        <View style={{ paddingVertical: 100 }}>
          <View
            style={{
              paddingVertical: 10,
            }}
          >
            <AccountHeader
              title=" Membership Verification  "
              text={` Enter your membeship number to proceed`}
            />
          </View>
          {message && <Text>{message}</Text>}
          <View style={[styles.card, styles.shawdowProp]}>
            <View>
              <TextInput
                editable={!loading}
                onChangeText={(text: string) => setInput(text)}
                value={input}
                style={styles.input}
                placeholder="Membership Number"
              />
            </View>

            <Formbtn
              style={[styles.btn]}
              title="Verify"
              onPress={onVerify}
              loading={loading}
            />
          </View>
        </View>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffff",
    borderRadius: 8,
    paddingVertical: 38,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shawdowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  btn: {
    marginVertical: 30,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default VerifyUser;
