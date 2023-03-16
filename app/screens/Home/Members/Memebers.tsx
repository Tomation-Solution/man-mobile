import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Container } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getMembers } from "../../../store/slices/extras/members";
import LoadingIndicator from "../../../utils/LoadingIndicator";
import { images } from "../../../assets/dummyData";
import { normalize } from "../../../constants/metric";

const Memebers = () => {
  const dispatch = useAppDispatch();
  const { membersList, loading } = useAppSelector(
    (state) => state.extras.members
  );

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  return (
    <Container>
      <ScrollView
        style={{
          padding: 10,
          marginTop: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <LoadingIndicator />
        ) : (
          <View
            style={{
              flex: 1,
              height: "100%",
            }}
          >
            {membersList?.data?.map((item: any) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  padding: 10,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    marginRight: 10,
                  }}
                  source={
                    item?.photo ? { uri: item?.photo?.toString() } : images.man
                  }
                />
                <View>
                  <Text
                    style={{
                      fontSize: normalize(13),
                      fontWeight: "bold",
                      flexWrap: "wrap",
                    }}
                  >
                    {item.full_name}
                  </Text>
                  <Text style={{ color: "blue" }}>{item.email}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </Container>
  );
};

export default Memebers;

const styles = StyleSheet.create({});
