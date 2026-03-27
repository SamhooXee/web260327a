/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useAuth as useAuthContext } from '../contexts/AuthContext'

// Re-export from context for backwards compatibility
export function useAuth() {
  return useAuthContext()
}