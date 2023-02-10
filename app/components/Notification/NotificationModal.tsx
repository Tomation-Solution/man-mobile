import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants/color";
import { Globalstyles } from "../../globals/styles";
import { Formbtn } from "../../components";



interface NotificationProps {
    onPress: any;
}

const NotificationModal = ({ onPress }: NotificationProps) => {
    return (
        <View style={Globalstyles.modalContainer}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "500",
                }}>
                Clear
            </Text>
            <Text
                style={{
                    marginVertical: 15,
                    textAlign: "center",
                    fontSize: 16,
                }}
            >
                Are you sure you want to clear all messages
            </Text>

            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: COLORS.primary,
                    padding: 10,
                    borderRadius: 10,
                    width: "50%",
                    alignItems: "center",
                }}
            >

                <Text

                    style={{
                        color: "white",
                        fontWeight: "500",

                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    Yes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: COLORS.primary,
                    padding: 10,
                    borderRadius: 10,
                    width: "50%",
                    alignItems: "center",
                }}
            >

                <Text

                    style={{
                        color: "white",
                        fontWeight: "500",

                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    No
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NotificationModal;
