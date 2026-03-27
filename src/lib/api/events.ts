import { supabase } from '../supabase';
import type { Event } from '../types';

export const eventsApi = {
  async getAll(): Promise<Event[]> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<Event | null> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(event: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .insert(event)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, event: Partial<Event>): Promise<Event> {
    const { data, error } = await supabase
      .from('w260327a_events')
      .update({ ...event, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_events')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
