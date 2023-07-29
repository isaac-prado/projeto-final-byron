"use client"
import { useEffect, useState } from "react";
import estadosCidades from "./estados_cidades";

interface Estado {
  nome: string;
  cidades: string[];
}

const LocationSelect: React.FC = () => {
  const [estados, setEstados] = useState<string[]>([]);
  const [cidades, setCidades] = useState<string[]>([]);
  const [selectedEstado, setSelectedEstado] = useState<string | null>(null);

  useEffect(() => {
    const estadosList = estadosCidades.map((estado: Estado) => estado.nome);
    setEstados(estadosList);
  }, []);

  useEffect(() => {
    if (selectedEstado) {
      const estadoData = estadosCidades.find(
        (estado: Estado) => estado.nome === selectedEstado
      );
      if (estadoData) {
        setCidades(estadoData.cidades);
      }
    }
  }, [selectedEstado]);

  const handleEstadoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEstado(event.target.value);
  };

  return (
    <div className="inline-flex items-baseline my-5 mt-1 block w-full">
        <label
        htmlFor="estado"
        className="block text-xs text-gray-600 uppercase me-5"
        >
        Estado:
        </label>
      <select
        value={selectedEstado || ""}
        onChange={handleEstadoChange}
        className="bg-white my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
      >
        <option value="">Escolha um estado</option>
        {estados.map((estado) => (
          <option key={estado} value={estado}>
            {estado}
          </option>
        ))}
      </select>
      <label
        htmlFor="cidade"
        className="block text-xs text-gray-600 uppercase mx-5"
        >
        Cidade:
        </label>
      <select className="bg-white my-5 mt-1 block w-full appearance-none rounded-md border border-marrom_claro px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
>
        {cidades.map((cidade) => (
          <option key={cidade} value={cidade}>
            {cidade}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelect;
