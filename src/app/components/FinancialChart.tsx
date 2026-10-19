import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  month: string;
  income: number;
  expense: number;
}

interface FinancialChartProps {
  data: ChartData[];
}

export function FinancialChart({ data }: FinancialChartProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-blue-400/20">
      <h2 className="text-xl font-semibold mb-4 text-white">Visão Geral Mensal</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f87171" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#60a5fa40" />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#93c5fd', fontSize: 12 }}
              axisLine={{ stroke: '#60a5fa40' }}
            />
            <YAxis 
              tick={{ fill: '#93c5fd', fontSize: 12 }}
              axisLine={{ stroke: '#60a5fa40' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#fff',
                backdropFilter: 'blur(10px)',
              }}
              formatter={(value: number) => 
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(value)
              }
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#4ade80"
              fillOpacity={1}
              fill="url(#colorIncome)"
              strokeWidth={2}
              name="Receitas"
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#f87171"
              fillOpacity={1}
              fill="url(#colorExpense)"
              strokeWidth={2}
              name="Despesas"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
