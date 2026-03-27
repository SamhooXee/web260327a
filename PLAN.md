# Implementation Plan: User Registration Feature

## Overview
- **Entry Point**: "立即注册" (Register Now) button in navbar → navigates to `/register`
- **Registration Type**: Full page registration
- **Auth Approach**: Direct user record creation (no Supabase Auth)
- **Additional**: Login functionality alongside registration

## User Requirements
1. Full page registration (not modal)
2. No Supabase Auth - create user records directly
3. Fields: name, email, phone (optional), organization (optional), password
4. No email verification
5. Login functionality included

## Implementation Phases

### Phase 1: Foundation & Types
- [ ] Add auth types to `src/lib/types.ts`
- [ ] Create `src/lib/api/auth.ts` - login/logout/register helpers
- [ ] Create `src/hooks/useAuth.ts` - auth state management

### Phase 2: Registration UI
- [ ] Create `src/pages/Register.tsx` - registration page with form
- [ ] Add form validation with Zod
- [ ] Add `/register` route in `src/App.tsx`
- [ ] Connect "立即注册" button in `src/components/Layout.tsx`

### Phase 3: Login UI
- [ ] Create `src/pages/Login.tsx` - login page
- [ ] Add `/login` route in `src/App.tsx`
- [ ] Connect login button in Layout

### Phase 4: Integration & Polish
- [ ] Update navbar to show auth state (login/logout based on auth)
- [ ] Handle duplicate email errors gracefully
- [ ] Add proper error handling and user feedback

## Files to Create
- `src/lib/api/auth.ts`
- `src/hooks/useAuth.ts`
- `src/pages/Register.tsx`
- `src/pages/Login.tsx`

## Files to Modify
- `src/lib/types.ts`
- `src/App.tsx`
- `src/components/Layout.tsx`

## Dependencies
- zod (for validation - likely already installed)

## Success Criteria
- [ ] "立即注册" navigates to registration page
- [ ] Registration form validates required fields (name, email, password)
- [ ] Successful registration creates user in database
- [ ] User can login after registration
- [ ] Auth state persists across page refreshes
- [ ] Navbar shows appropriate state (logged in vs logged out)