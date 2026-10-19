import { useState } from 'react';
import { Plus, TrendingUp, TrendingDown, Wallet, LogOut } from 'lucide-react';
import { TransactionList, type Transaction } from './TransactionList';
import { FinancialChart } from './FinancialChart';
import { AddTransactionModal } from './AddTransactionModal';
import { WavyBackground } from './WavyBackground';

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

export function Dashboard({ userEmail, onLogout }: DashboardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      description: 'Salário',
      amount: 5000,
      type: 'income',
      category: 'Salário',
      date: '2026-02-01',
    },
    {
      id: '2',
      description: 'Supermercado',
      amount: 450,
      type: 'expense',
      category: 'Alimentação',
      date: '2026-02-02',
    },
    {
      id: '3',
      description: 'Gasolina',
      amount: 200,
      type: 'expense',
      category: 'Transporte',
      date: '2026-02-02',
    },
    {
      id: '4',
      description: 'Internet',
      amount: 100,
      type: 'expense',
      category: 'Moradia',
      date: '2026-01-28',
    },
    {
      id: '5',
      description: 'Freelance',
      amount: 1500,
      type: 'income',
      category: 'Freelance',
      date: '2026-01-25',
    },
  ]);

  const chartData = [
    { month: 'Set', income: 4500, expense: 2800 },
    { month: 'Out', income: 5200, expense: 3200 },
    { month: 'Nov', income: 4800, expense: 2900 },
    { month: 'Dez', income: 6000, expense: 4100 },
    { month: 'Jan', income: 5500, expense: 3500 },
    { month: 'Fev', income: 6500, expense: 2750 },
  ];

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = totalIncome - totalExpense;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  };

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Date.now().toString(),
    };
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="min-h-screen relative">
      <WavyBackground />
      <header className="bg-white/10 backdrop-blur-md shadow-sm border-b border-blue-400/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg shadow-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">Minhas Finanças</h1>
                <p className="text-sm text-blue-200">{userEmail}</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-blue-100 hover:bg-white/10 rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-blue-400/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100">Saldo Total</span>
              <Wallet className="w-5 h-5 text-blue-400" />
            </div>
            <p className={`text-3xl font-bold ${balance >= 0 ? 'text-blue-400' : 'text-red-400'}`}>
              {formatCurrency(balance)}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-blue-400/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100">Receitas</span>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-green-400">
              {formatCurrency(totalIncome)}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-blue-400/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-100">Despesas</span>
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-3xl font-bold text-red-400">
              {formatCurrency(totalExpense)}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-lg shadow-blue-500/30"
          >
            <Plus className="w-5 h-5" />
            Nova Transação
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FinancialChart data={chartData} />
          <TransactionList transactions={transactions} />
        </div>
      </main>

      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTransaction}
      />
    </div>
  );
}
