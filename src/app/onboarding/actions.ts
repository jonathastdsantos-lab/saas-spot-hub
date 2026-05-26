'use server';

import { createClient } from '../../utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function submitProduct(formData: FormData) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const website = formData.get('website') as string;
  const category_id = formData.get('category_id') as string;
  const featuresStr = formData.get('features') as string;
  const price = formData.get('price') as string;

  if (!name || !description || !category_id) {
    return { error: 'Preencha os campos obrigatórios.' };
  }

  const tags = featuresStr ? featuresStr.split(',').map(s => s.trim()).filter(Boolean) : [];

  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const { error } = await supabase.from('products').insert({
    id,
    name,
    description,
    website,
    category_id,
    tags,
    price,
    owner_id: user.id,
    status: 'pending' // Fica aguardando aprovação
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/');
  return { success: true };
}
