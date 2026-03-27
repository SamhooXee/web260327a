import { supabase } from '../supabase';
import type { Training } from '../types';

export const trainingApi = {
  async getAll(): Promise<Training[]> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Training | null> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(training: Omit<Training, 'id' | 'created_at' | 'updated_at'>): Promise<Training> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .insert(training)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, training: Partial<Training>): Promise<Training> {
    const { data, error } = await supabase
      .from('w260327a_training')
      .update({ ...training, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_training')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
