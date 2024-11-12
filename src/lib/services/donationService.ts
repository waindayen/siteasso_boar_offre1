import { supabase, insertData, updateData } from '../supabase';
import type { Donation } from '../types';

export async function createDonation(donation: Donation) {
  try {
    // 1. Insert donation record
    const donationResult = await insertData('donations', {
      amount: donation.amount,
      project_id: donation.projectId,
      donor_name: `${donation.firstName} ${donation.lastName}`,
      donor_email: donation.email,
      donor_phone: donation.phone || null,
      message: donation.message || null,
      frequency: donation.frequency || 'once',
      status: 'completed'
    });

    if (!donationResult.success) {
      throw new Error(donationResult.error || 'Failed to process donation');
    }

    // 2. Update project raised amount and progress
    if (donationResult.data) {
      const { error: projectError } = await supabase.rpc('update_project_progress', {
        p_project_id: donation.projectId,
        p_amount: donation.amount
      });

      if (projectError) {
        console.error('Project update error:', projectError);
        throw new Error('Failed to update project progress');
      }
    }

    return { 
      success: true, 
      data: donationResult.data,
      message: 'Thank you! Your donation has been processed successfully.'
    };

  } catch (error) {
    console.error('Donation service error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred',
      message: 'Sorry, there was a problem processing your donation. Please try again.'
    };
  }
}

export async function getDonationsByProject(projectId: number) {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return {
      success: true,
      data: data || [],
      message: 'Donations retrieved successfully'
    };
  } catch (error) {
    console.error('Error fetching donations:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
      data: []
    };
  }
}