import { supabase } from '../supabase';
import type { Conference } from '../types';

export const conferencesApi = {
  async getAll(): Promise<Conference[]> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Conference | null> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(conference: Omit<Conference, 'id' | 'created_at' | 'updated_at'>): Promise<Conference> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .insert(conference)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, conference: Partial<Conference>): Promise<Conference> {
    const { data, error } = await supabase
      .from('w260327a_conferences')
      .update({ ...conference, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_conferences')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
