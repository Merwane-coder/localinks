import React from 'react'
import { getCurrentSession } from '@/actions/auth'
import { redirect } from 'next/navigation'
import { CreditCard, Key, User, Calendar, Shield, Lock, LogOut } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChangePasswordForm } from '../components/change-password-form'

type Props = {}

const ProfilePage = async (props: Props) => {
  const session = await getCurrentSession()
  
  if (!session?.user) {
    redirect('/login')
  }

  const user = session.user
  const firstLetter = user.email?.charAt(0).toUpperCase() || 'U'
  const memberSince = new Date(user.createdAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const getSubscriptionColor = () => {
    switch(user.subscriptionLevel) {
      case 'premium': return 'bg-gradient-to-br from-purple-600 to-pink-500 shadow-purple-200'
      case 'pro': return 'bg-gradient-to-br from-blue-600 to-indigo-500 shadow-blue-200'
      default: return 'bg-gradient-to-br from-gray-600 to-gray-500 shadow-gray-200'
    }
  }

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Sidebar */}
        <div className='w-full lg:w-72 space-y-6'>
          {/* Profile Card */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center'>
            <div className='flex justify-center mb-4'>
              <div className={`flex items-center justify-center w-24 h-24 rounded-full ${getSubscriptionColor()} text-white text-4xl font-bold shadow-lg`}>
                {firstLetter}
              </div>
            </div>
            
            <h2 className='text-lg font-semibold text-gray-900 mb-2 truncate px-2'>{user.email}</h2>
            
            {user.subscriptionLevel && (
              <span className={`inline-block px-4 py-1.5 text-sm rounded-full font-medium text-white ${getSubscriptionColor()} shadow-sm mb-4`}>
                {user.subscriptionLevel.toUpperCase()}
              </span>
            )}
            
            <div className='flex items-center justify-center text-sm text-gray-500'>
              <Calendar className='w-4 h-4 mr-2 text-gray-400' />
              <span>Membre depuis {memberSince}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
            <ul className='space-y-1 p-2'>
              <li>
                <Link href="#" className='flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'>
                  <User className='w-5 h-5 mr-3 text-gray-500' />
                  <span className='font-medium'>Profil</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='flex items-center p-3 rounded-lg bg-blue-50 text-blue-600 font-medium'>
                  <Lock className='w-5 h-5 mr-3 text-blue-500' />
                  <span>Sécurité</span>
                  <span className='ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full'>Actif</span>
                </Link>
              </li>
              <li>
                <Link href="#" className='flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'>
                  <CreditCard className='w-5 h-5 mr-3 text-gray-500' />
                  <span>Abonnement</span>
                </Link>
              </li>
              <li>
                <Link href="/logout" className='flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors'>
                  <LogOut className='w-5 h-5 mr-3 text-gray-500' />
                  <span>Déconnexion</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className='flex-1 space-y-6'>
          {/* Security Section */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
            <div className='border-b border-gray-100 px-6 py-5 bg-gray-50'>
              <div className='flex items-center'>
                <div className='p-2 bg-blue-100 rounded-lg mr-4'>
                  <Shield className='w-5 h-5 text-blue-600' />
                </div>
                <div>
                  <h1 className='text-xl font-bold text-gray-900'>Sécurité du compte</h1>
                  <p className='text-sm text-gray-500'>Gérez les paramètres de sécurité de votre compte</p>
                </div>
              </div>
            </div>

            <div className='p-6'>
              <div className='max-w-2xl mx-auto space-y-8'>
                <div>
                  <h2 className='text-lg font-semibold mb-4 flex items-center'>
                    <Key className='w-5 h-5 mr-2 text-blue-500' />
                    Changement de mot de passe
                  </h2>
                  <ChangePasswordForm userId={user.id} />
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Security */}
          <div className='bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden'>
            <div className='border-b border-gray-100 px-6 py-5'>
              <h2 className='text-lg font-semibold text-gray-900'>Sécurité avancée</h2>
            </div>
            
            <div className='p-6'>
              <div className='space-y-4'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200'>
                  <div className='flex items-start mb-3 sm:mb-0'>
                    <div className='p-2 bg-white rounded-lg shadow-sm mr-4 border border-gray-100'>
                      <Key className='w-5 h-5 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='font-medium text-gray-900'>Authentification à deux facteurs (2FA)</h3>
                      <p className='text-sm text-gray-500 mt-1'>Protégez votre compte avec une vérification supplémentaire</p>
                    </div>
                  </div>
                  <button className={cn(buttonVariants({ variant: 'default' }), 'w-full sm:w-auto')}>
                    Activer le 2FA
                  </button>
                </div>

                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200'>
                  <div className='flex items-start mb-3 sm:mb-0'>
                    <div className='p-2 bg-white rounded-lg shadow-sm mr-4 border border-gray-100'>
                      <Shield className='w-5 h-5 text-blue-600' />
                    </div>
                    <div>
                      <h3 className='font-medium text-gray-900'>Sessions actives</h3>
                      <p className='text-sm text-gray-500 mt-1'>Voir et gérer toutes vos sessions connectées</p>
                    </div>
                  </div>
                  <button className={cn(buttonVariants({ variant: 'outline' }), 'w-full sm:w-auto')}>
                    Voir les sessions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage