import Screen_Home from '../components/screens/Screen_Home';
import { createClient } from '../utils/supabase/server';

export default async function Home() {
  const supabase = createClient();
  
  const { data: products } = await supabase.from('products').select('*');
  const { data: categories } = await supabase.from('categories').select('*').order('count', { ascending: false });

  return <Screen_Home products={products || ([] as any[])} categories={categories || ([] as any[])} />;
}
