import { supabase } from '../supabase';
import type { News } from '../types';

export const newsApi = {
  async getAll(): Promise<News[]> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async getById(id: string): Promise<News | null> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(news: Omit<News, 'id' | 'created_at' | 'updated_at'>): Promise<News> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .insert(news)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id: string, news: Partial<News>): Promise<News> {
    const { data, error } = await supabase
      .from('w260327a_news')
      .update({ ...news, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('w260327a_news')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
