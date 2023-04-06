import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Container, AccountHeader, CustomModal } from "../../../../components";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getDuelist } from "../../../../store/slices/due_list_and_owning_members/getDuelistSlice";
import LoadingIndicator from "../../../../utils/LoadingIndicator";
import { normalize } from "../../../../constants/metric";
import { COLORS } from "../../../../constants/color";
import { useIsFocused } from "@react-navigation/native";

const PendingPayment = ({
  setOutstanding,
  outstanding,
}: {
  setOutstanding: any;
  outstanding: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAppSelector((state) => state.authReducers.login);
  const { userData, loading } = useAppSelector(
    (state) => state.duelistReducers.getDuelistSlice
  );

  const isFocused = useIsFocused();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const outstandingPayment = userData?.data?.filter(
      (item: any) => item.is_paid === false
    );

    setOutstanding(() =>
      outstandingPayment?.reduce((a: any, b: any) => a + parseInt(b.amount), 0)
    );
  }, [userData, isFocused]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getDuelist());
    }
  }, [dispatch]);

  const tableHead = ["Purpose of Payment", "#Amount", "Date", "Action"];

  const onButtonClick = () => {
    setIsOpen(true);
  };

  const ButtonElement = React.memo(({ ispaid }: any) => (
    <TouchableOpacity onPress={onButtonClick}>
      <View style={styles.btn}>
        <Text style={styles.btnText}> Select Action</Text>
      </View>
    </TouchableOpacity>
  ));

  const ActionButton = ({ action }: any) => (
    <TouchableOpacity
      style={{
        width: "80%",
        marginBottom: normalize(10),
        backgroundColor: COLORS.primary,
        borderRadius: normalize(10),
      }}
      onPress={() => {
        // navigation.navigate("Payment");
      }}
    >
      <Text style={styles.modalText}>{action}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <CustomModal visible={isOpen} onRequestClose={setIsOpen}>
        <View style={styles.modalWrapper}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: normalize(14),
                fontWeight: "bold",
              }}
            >
              Select Action
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                padding: 5,
                borderRadius: 10,
              }}
              onPress={() => setIsOpen(false)}
            >
              <Text
                style={{
                  fontSize: normalize(12),
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: normalize(18),
              alignItems: "center",
            }}
          >
            <ActionButton action="Pay" />
            <ActionButton action="Demand Notice" />
          </View>
        </View>
      </CustomModal>
      <View style={styles.container}>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            <Table borderStyle={{ borderColor: "transparent" }}>
              <Row
                data={tableHead}
                flexArr={[1, 1, 1, 1]}
                style={styles.head}
                textStyle={styles.text}
              />
              <ScrollView>
                {userData?.data
                  ?.filter((item: any) => item.is_paid === false)
                  ?.map((rowData: any, index: any) => {
                    const { due__startDate, due__Name, amount, is_paid } =
                      rowData;
                    return (
                      <TableWrapper key={index} style={styles.row}>
                        {
                          <>
                            <Cell data={due__Name} textStyle={styles.rowText} />
                            <Cell data={amount} textStyle={styles.rowText} />
                            <Cell
                              data={due__startDate}
                              textStyle={styles.rowText}
                            />

                            <View style={styles.dueWrapper}>
                              <ButtonElement />
                            </View>
                          </>
                        }
                      </TableWrapper>
                    );
                  })}
              </ScrollView>
            </Table>
          </>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  head: { width: "100%", height: 45, backgroundColor: COLORS.primary },
  wrapper: { flexDirection: "row" },
  tableButton: {},
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  label: {
    fontWeight: "500",
    fontSize: 12,
    flexWrap: "wrap",
    // color: Colors.text,
    // minWidth: Dimensions.get('window').width < 375 ? '100%' : '60%'
  },
  tab: {
    borderRadius: 10,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    borderRadius: 8,
    // paddingVertical: 38,
    // paddingVertical: 20,
    width: 181,
    height: 91,
    // marginVertical: 10,
    // paddingBottom: 25
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    margin: 6,
    textAlign: "center",
    width: "100%",
    fontWeight: "600",
    fontSize: 11,
    color: "white",
  },
  rowText: {
    margin: 6,
    textAlign: "center",
    width: "100%",
    fontWeight: "600",
    fontSize: 11,
  },
  dataWrapper: {},
  row: { flexDirection: "row" },
  btn: {
    width: 80,
    paddingVertical: 11,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginLeft: 14,
  },
  btnText: { textAlign: "center", color: "#fff", fontSize: 12, padding: 2 },
  dueWrapper: { marginVertical: 10 },
  modalWrapper: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalText: {
    fontSize: normalize(14),
    fontWeight: "bold",
    color: "white",
    paddingVertical: 10,
    textAlign: "center",
  },
});

export default PendingPayment;
