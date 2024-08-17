import React from 'react';
import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/utils/format-numer';

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

const SupplierCard: React.FC<{ supplier: Supplier }> = ({ supplier }) => {
    return (
        <Card>
            <div className="flex items-center bg-white p-4 mb-4 mx-auto">
                {/* Logo do Fornecedor */}
                <div className="w-24 h-24 flex-shrink-0 mr-4">
                    <img
                        src={supplier.logo}
                        alt={`${supplier.name} logo`}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Informações do Fornecedor */}
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-lg font-bold mb-1">{supplier.name}</h3>
                    <div className='flex justify-between items-start'>
                        <div className=''>
                            <p className="text-gray-700">Estado de Origem: {supplier.originState}</p>
                            <p className="text-gray-700">Custo por kWh: {formatCurrency(supplier.costPerKwh)}</p>
                            <p className="text-gray-700">Limite Mínimo de kWh: {supplier.minimumKwhLimit}</p>
                            <p className="text-gray-700">Total de Clientes: {supplier.totalClients}</p>
                        </div>
                        <div className='flex flex-col justify-between h-full'>
                            <p className="text-gray-700">Avaliação Média: {supplier.averageRating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SupplierCard;
