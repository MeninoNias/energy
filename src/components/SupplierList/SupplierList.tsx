import React from 'react';
import SupplierCard from '../SupplierCard';

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



const SupplierList: React.FC<{ suppliers: Supplier[] | null }> = ({ suppliers }) => {
  return (
    <div className='space-y-4 mb-5'>
      {suppliers && suppliers.length > 0 ? (
        suppliers.map(supplier => (
          <SupplierCard key={supplier.publicId} supplier={supplier} />
        ))
      ) :
        (
          <div className='flex items-center justify-center py-10'>
            <h2> Nenhum fornecedor disponivel </h2>
          </div>
        )}


    </div>
  );
};

export default SupplierList;
