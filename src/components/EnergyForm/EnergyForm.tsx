import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface EnergyFormProps {
    onSubmit: (valor: number) => void;
}

const EnergyForm: React.FC<EnergyFormProps> = ({ onSubmit }) => {
    const [consumo, setConsumo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(Number(consumo));
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input
                type="number"
                value={consumo}
                onChange={(e) => setConsumo(e.target.value)}
                placeholder="Consumo mensal em kWh"
                className="flex-grow p-2 border border-gray-300 rounded-md"
                min={0}
                required
            />
            <Button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
            >
                Ver Fornecedores
            </Button>
        </form>
    );
};

export default EnergyForm;
