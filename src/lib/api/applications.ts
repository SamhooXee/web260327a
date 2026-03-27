import { supabase } from '../supabase';
import type { TrainingApplication, ConferenceRegistration } from '../types';

export const applicationsApi = {
  // Training Applications
  async getTrainingApplications(): Promise<TrainingApplication[]> {
    const { data, error } = await supabase
      .from('w260327a_training_applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async createTrainingApplication(
    application: Omit<TrainingApplication, 'id' | 'created_at' | 'updated_at'>
  ): Promise<TrainingApplication> {
    const { data, error } = await supabase
      .from('w260327a_training_applications')
      .insert(application)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // Conference Registrations
  async getConferenceRegistrations(): Promise<ConferenceRegistration[]> {
    const { data, error } = await supabase
      .from('w260327a_conference_registrations')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  },

  async createConferenceRegistration(
    registration: Omit<ConferenceRegistration, 'id' | 'created_at' | 'updated_at'>
  ): Promise<ConferenceRegistration> {
    const { data, error } = await supabase
      .from('w260327a_conference_registrations')
      .insert(registration)
      .select()
      .single();
    if (error) throw error;
    return data;
  }
};
