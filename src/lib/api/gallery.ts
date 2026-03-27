import { supabase } from '../supabase';
import type { Gallery } from '../types';

export const galleryApi = {
  async getAll(): Promise<Gallery[]> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Gallery | null> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(gallery: Omit<Gallery, 'id' | 'created_at' | 'updated_at'>): Promise<Gallery> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .insert(gallery)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, gallery: Partial<Gallery>): Promise<Gallery> {
    const { data, error } = await supabase
      .from('w260327a_gallery')
      .update({ ...gallery, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_gallery')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
