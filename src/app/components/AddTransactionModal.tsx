import { useState } from 'react';
import { X } from 'lucide-react';
import type { Transaction } from './TransactionList';

interface AddTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (transaction: Omit<Transaction, 'id'>) => void;
}

export function AddTransactionModal({ isOpen, onClose, onAdd }: AddTransactionModalProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onAdd({
      description,
      amount: parseFloat(amount),
      type,
      category,
      date,
    });

    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('');
    setDate(new Date().toISOString().split('T')[0]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl max-w-md w-full border border-blue-400/20">
        <div className="flex items-center justify-between p-6 border-b border-blue-400/20">
          <h2 className="text-xl font-semibold text-white">Nova Transação</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition text-blue-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">
              Tipo
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setType('income')}
                className={`flex-1 py-2 px-4 rounded-lg border transition ${
                  type === 'income'
                    ? 'bg-green-500/20 border-green-400 text-green-300'
                    : 'border-blue-400/30 text-blue-100 hover:bg-white/5'
                }`}
              >
                Receita
              </button>
              <button
                type="button"
                onClick={() => setType('expense')}
                className={`flex-1 py-2 px-4 rounded-lg border transition ${
                  type === 'expense'
                    ? 'bg-red-500/20 border-red-400 text-red-300'
                    : 'border-blue-400/30 text-blue-100 hover:bg-white/5'
                }`}
              >
                Despesa
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-blue-100 mb-2">
              Descrição
            </label>
            <input
              id="description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder:text-blue-200/50"
              placeholder="Ex: Salário, Supermercado..."
              required
            />
          </div>

          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-blue-100 mb-2">
              Valor
            </label>
            <input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white placeholder:text-blue-200/50"
              placeholder="0.00"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-blue-100 mb-2">
              Categoria
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white"
              required
            >
              <option value="" className="bg-gray-900">Selecione uma categoria</option>
              {type === 'income' ? (
                <>
                  <option value="Salário" className="bg-gray-900">Salário</option>
                  <option value="Freelance" className="bg-gray-900">Freelance</option>
                  <option value="Investimentos" className="bg-gray-900">Investimentos</option>
                  <option value="Outros" className="bg-gray-900">Outros</option>
                </>
              ) : (
                <>
                  <option value="Alimentação" className="bg-gray-900">Alimentação</option>
                  <option value="Transporte" className="bg-gray-900">Transporte</option>
                  <option value="Moradia" className="bg-gray-900">Moradia</option>
                  <option value="Saúde" className="bg-gray-900">Saúde</option>
                  <option value="Lazer" className="bg-gray-900">Lazer</option>
                  <option value="Educação" className="bg-gray-900">Educação</option>
                  <option value="Outros" className="bg-gray-900">Outros</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-blue-100 mb-2">
              Data
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-blue-400/30 rounded-lg text-blue-100 hover:bg-white/5 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30"
            >
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
