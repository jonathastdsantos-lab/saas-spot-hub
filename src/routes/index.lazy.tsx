import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { createClient } from '@supabase/supabase-js'
import Screen_Home from '../components/screens/Screen_Home'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fallback.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'fallback';
const supabase = createClient(supabaseUrl, supabaseKey);

function Index() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await supabase.from('products').select('*').eq('status', 'approved');
      return data || [];
    }
  });

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await supabase.from('categories').select('*').order('count', { ascending: false });
      return data || [];
    }
  });

  return <Screen_Home products={products || []} categories={categories || []} />
}
