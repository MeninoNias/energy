import EnergyForm from "@/components/EnergyForm";
import Spinner from "@/components/Spinner";
import SupplierList from "@/components/SupplierList";
import { gql, useLazyQuery } from '@apollo/client';
import { useState } from "react";

interface Supplier {
  publicId: string;
  name: string;
  logo: string;
  originState: string;
  costPerKwh: number;
  minimumKwhLimit: number;
  totalClients: number;
  averageRating: number;
}

const GET_SUPPLIERS = gql`
  query GetSuppliers($minKwhLimit: Int!) {
    suppliers(minKwhLimit: $minKwhLimit) {
        publicId
        name
        cnpj
        logo
        originState
        costPerKwh
        minimumKwhLimit
        totalClients
        averageRating
    }
  }
`;

export function SupplierMain() {
  const [consumo, setConsumo] = useState<number | null>(null);
  const [suppliers, setSuppliers] = useState<Supplier[] | null>(null);
  const [loadingConsumo, setLoadingConsumo] = useState<boolean>(false);

  const [getSuppliers,] = useLazyQuery(GET_SUPPLIERS);

  const handleFormSubmit = (valor: number) => {
    setLoadingConsumo(true)
    getSuppliers({ variables: { minKwhLimit: valor } }).then((response) => {
      setSuppliers(response.data.suppliers)
    }
    ).catch((error) => {
      console.log('error', error)
    }).finally(() => {
      setLoadingConsumo(false)
    })
    setConsumo(valor);
  };

  return (
    <div className={`flex flex-col items-center justify-center transition-all duration-500 ${consumo ? 'pt-12' : 'h-screen'}`}>
      <div className="w-full max-w-xl px-4">
        {!consumo && (
          <h1 className="text-2xl font-bold mb-4 text-center">Escolha de Fornecedor de Energia</h1>
        )}
        <EnergyForm onSubmit={handleFormSubmit} />
      </div>
      <div className="w-full flex items-center mt-10 justify-center max-w-6xl px-4">
        {!loadingConsumo && consumo && (
          <div className="mt-8 w-full">
            <h2 className="text-xl font-semibold mb-2">Fornecedores Disponíveis</h2>
            <SupplierList suppliers={suppliers} />
          </div>
        )}
        {loadingConsumo && (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default SupplierMain