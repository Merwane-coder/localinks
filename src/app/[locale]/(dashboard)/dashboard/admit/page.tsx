'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

type ClientStat = {
  id: number;
  nomEntreprise: string;
  stats: {
    totalPoints: number;
    totalMaps: number;
    totalItineraries: number;
  };
};

type AdminStats = {
  totalClients: number;
  totalPoints: number;
  totalMaps: number;
  totalItineraries: number;
  clients: ClientStat[];
};

export default function AdminDashboard() {
  const [data, setData] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/dashboard/stats');
        if (res.status === 401 || res.status === 403) {
          toast.error('Accès refusé.');
          router.push('/dashboard');
          return;
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        toast.error('Erreur lors du chargement des statistiques');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [router]);

  if (loading) {
    return <div className="p-8 text-center">Chargement...</div>;
  }

  if (!data) {
    return <div className="p-8 text-center text-red-500">Erreur de chargement</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard title="Clients" value={data.totalClients} />
        <StatCard title="Points générés" value={data.totalPoints} />
        <StatCard title="Cartes KML" value={data.totalMaps} />
        <StatCard title="Itinéraires" value={data.totalItineraries} />
      </div>

      <h2 className="text-xl font-semibold mb-4">Stats par client</h2>
      <div className="space-y-4">
        {data.clients.map(client => (
          <div key={client.id} className="p-4 border rounded bg-white shadow-sm">
            <h3 className="text-lg font-bold">{client.nomEntreprise}</h3>
            <p className="text-sm text-gray-500">ID: {client.id}</p>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <StatCard title="Points" value={client.stats.totalPoints} small />
              <StatCard title="Cartes" value={client.stats.totalMaps} small />
              <StatCard title="Itinéraires" value={client.stats.totalItineraries} small />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  small = false,
}: {
  title: string;
  value: number;
  small?: boolean;
}) {
  return (
    <div className={`rounded-md ${small ? 'bg-gray-50 p-3' : 'bg-blue-100 p-6'} text-center`}>
      <div className="text-sm text-gray-600">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
