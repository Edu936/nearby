import { View, Text } from "react-native";
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native";
import { styleDetails } from "./styles";
import { Info } from "../info";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};

export function Details({ data }: Props) {
  return (
    <View style={styleDetails.container}>
      <Text style={styleDetails.name}>{data.name}</Text>
      <Text style={styleDetails.description}>{data.description}</Text>
      <View style={styleDetails.group}>
        <Text style={styleDetails.title}>
            Informações
        </Text>
        <Info icon={IconTicket} description={`${data.coupons} cupons disponíveis`} />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>
      <View style={styleDetails.group}>
        <Text style={styleDetails.title}>Regulamento</Text>
        {
          data.rules.map((item) => (
            <Text
              key={item.id}
              style={styleDetails.rule}
            >
              {`\u2022 ${item.description}`}
            </Text>
          ))
        }
      </View>
    </View>
  );
}
