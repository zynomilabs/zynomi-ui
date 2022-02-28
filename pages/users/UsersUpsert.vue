<template>
    <section v-if="isUpsertUsersVisible" class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title"
        role="dialog" aria-modal="true">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute inset-0" aria-hidden="true"></div>
            <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
                <div class="w-screen max-w-md">
                    <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                        <div class="flex-1 h-0 overflow-y-auto">
                            <header class="space-y-1 py-6 px-4 bg-green-700 sm:px-6">
                                <div class="flex items-center justify-between space-x-3">
                                    <h2 class="text-lg leading-7 font-medium text-white">
                                        Users
                                    </h2>
                                    <div class="h-7 flex items-center">
                                        <button v-on:click="closeUsersPanel()" aria-label="Close panel"
                                            class="text-green-200 hover:text-white transition ease-in-out duration-150">
                                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-sm leading-5 text-green-300">
                                        Create or update Users record
                                    </p>
                                </div>
                            </header>
                            <div class="flex-1 flex flex-col justify-between">
                                <div class="px-4 divide-y divide-gray-200 sm:px-6">
                                    <div class="space-y-6 pt-6 pb-5">
                                        <form name="frmUsers" id="frmUsers"
                                            class="space-y-8 divide-y divide-gray-200" @submit.prevent="SaveAndUpdate">
                                            <div class="sm:overflow-hidden">
                                                <div class="bg-white space-y-6">
                                                    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                                        <!--<div class="sm:col-span-6">
                                                        <label for="code" class="block text-sm font-medium text-gray-700">
                                                            Code
                                                        </label>
                                                        <div class="mt-1 rounded-md shadow-sm">
                                                            <input v-model="data.code" type="text" name="code" id="code" placeholder="" value="$RT34@23" autocomplete="code" class="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm">
                                                        </div>
                                                        <p class="mt-2 text-sm text-red-600" id="email-error">Special Characters are not allowed.</p>
                                                    </div>-->

                                                    
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Instance_id
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.instance_id" type="text" id="instance_id"
                                                                    name="instance_id" autocomplete="instance_id"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Instance_id
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.instance_id" type="text" id="instance_id"
                                                                    name="instance_id" autocomplete="instance_id"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Login
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.login" type="text" id="login"
                                                                    name="login" autocomplete="login"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Login
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.login" type="text" id="login"
                                                                    name="login" autocomplete="login"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Hashed_password
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.hashed_password" type="text" id="hashed_password"
                                                                    name="hashed_password" autocomplete="hashed_password"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Aud
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.aud" type="text" id="aud"
                                                                    name="aud" autocomplete="aud"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Aud
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.aud" type="text" id="aud"
                                                                    name="aud" autocomplete="aud"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Hashed_password
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.hashed_password" type="text" id="hashed_password"
                                                                    name="hashed_password" autocomplete="hashed_password"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Role
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.role" type="text" id="role"
                                                                    name="role" autocomplete="role"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Firstname
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.firstname" type="text" id="firstname"
                                                                    name="firstname" autocomplete="firstname"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Role
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.role" type="text" id="role"
                                                                    name="role" autocomplete="role"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Firstname
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.firstname" type="text" id="firstname"
                                                                    name="firstname" autocomplete="firstname"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email" type="text" id="email"
                                                                    name="email" autocomplete="email"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Lastname
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.lastname" type="text" id="lastname"
                                                                    name="lastname" autocomplete="lastname"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email" type="text" id="email"
                                                                    name="email" autocomplete="email"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Lastname
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.lastname" type="text" id="lastname"
                                                                    name="lastname" autocomplete="lastname"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Admin
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.admin" type="text" id="admin"
                                                                    name="admin" autocomplete="admin"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Admin
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.admin" type="text" id="admin"
                                                                    name="admin" autocomplete="admin"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Encrypted_password
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.encrypted_password" type="text" id="encrypted_password"
                                                                    name="encrypted_password" autocomplete="encrypted_password"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Encrypted_password
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.encrypted_password" type="text" id="encrypted_password"
                                                                    name="encrypted_password" autocomplete="encrypted_password"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Status
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.status" type="text" id="status"
                                                                    name="status" autocomplete="status"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_confirmed_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_confirmed_at" type="text" id="email_confirmed_at"
                                                                    name="email_confirmed_at" autocomplete="email_confirmed_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_confirmed_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_confirmed_at" type="text" id="email_confirmed_at"
                                                                    name="email_confirmed_at" autocomplete="email_confirmed_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Status
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.status" type="text" id="status"
                                                                    name="status" autocomplete="status"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Last_login_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.last_login_on" type="text" id="last_login_on"
                                                                    name="last_login_on" autocomplete="last_login_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Invited_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.invited_at" type="text" id="invited_at"
                                                                    name="invited_at" autocomplete="invited_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Last_login_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.last_login_on" type="text" id="last_login_on"
                                                                    name="last_login_on" autocomplete="last_login_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Invited_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.invited_at" type="text" id="invited_at"
                                                                    name="invited_at" autocomplete="invited_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Confirmation_token
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.confirmation_token" type="text" id="confirmation_token"
                                                                    name="confirmation_token" autocomplete="confirmation_token"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Language
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.language" type="text" id="language"
                                                                    name="language" autocomplete="language"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Confirmation_token
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.confirmation_token" type="text" id="confirmation_token"
                                                                    name="confirmation_token" autocomplete="confirmation_token"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Language
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.language" type="text" id="language"
                                                                    name="language" autocomplete="language"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Auth_source_id
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.auth_source_id" type="text" id="auth_source_id"
                                                                    name="auth_source_id" autocomplete="auth_source_id"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Auth_source_id
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.auth_source_id" type="text" id="auth_source_id"
                                                                    name="auth_source_id" autocomplete="auth_source_id"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Confirmation_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.confirmation_sent_at" type="text" id="confirmation_sent_at"
                                                                    name="confirmation_sent_at" autocomplete="confirmation_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Confirmation_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.confirmation_sent_at" type="text" id="confirmation_sent_at"
                                                                    name="confirmation_sent_at" autocomplete="confirmation_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Created_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.created_on" type="text" id="created_on"
                                                                    name="created_on" autocomplete="created_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Recovery_token
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.recovery_token" type="text" id="recovery_token"
                                                                    name="recovery_token" autocomplete="recovery_token"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Created_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.created_on" type="text" id="created_on"
                                                                    name="created_on" autocomplete="created_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Recovery_token
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.recovery_token" type="text" id="recovery_token"
                                                                    name="recovery_token" autocomplete="recovery_token"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Recovery_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.recovery_sent_at" type="text" id="recovery_sent_at"
                                                                    name="recovery_sent_at" autocomplete="recovery_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Updated_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.updated_on" type="text" id="updated_on"
                                                                    name="updated_on" autocomplete="updated_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Recovery_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.recovery_sent_at" type="text" id="recovery_sent_at"
                                                                    name="recovery_sent_at" autocomplete="recovery_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Updated_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.updated_on" type="text" id="updated_on"
                                                                    name="updated_on" autocomplete="updated_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_token_new
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_token_new" type="text" id="email_change_token_new"
                                                                    name="email_change_token_new" autocomplete="email_change_token_new"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Type
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.type" type="text" id="type"
                                                                    name="type" autocomplete="type"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_token_new
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_token_new" type="text" id="email_change_token_new"
                                                                    name="email_change_token_new" autocomplete="email_change_token_new"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Type
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.type" type="text" id="type"
                                                                    name="type" autocomplete="type"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Identity_url
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.identity_url" type="text" id="identity_url"
                                                                    name="identity_url" autocomplete="identity_url"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change" type="text" id="email_change"
                                                                    name="email_change" autocomplete="email_change"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change" type="text" id="email_change"
                                                                    name="email_change" autocomplete="email_change"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Identity_url
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.identity_url" type="text" id="identity_url"
                                                                    name="identity_url" autocomplete="identity_url"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_sent_at" type="text" id="email_change_sent_at"
                                                                    name="email_change_sent_at" autocomplete="email_change_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Mail_notification
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.mail_notification" type="text" id="mail_notification"
                                                                    name="mail_notification" autocomplete="mail_notification"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_sent_at" type="text" id="email_change_sent_at"
                                                                    name="email_change_sent_at" autocomplete="email_change_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Mail_notification
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.mail_notification" type="text" id="mail_notification"
                                                                    name="mail_notification" autocomplete="mail_notification"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Salt
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.salt" type="text" id="salt"
                                                                    name="salt" autocomplete="salt"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Salt
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.salt" type="text" id="salt"
                                                                    name="salt" autocomplete="salt"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Last_sign_in_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.last_sign_in_at" type="text" id="last_sign_in_at"
                                                                    name="last_sign_in_at" autocomplete="last_sign_in_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Last_sign_in_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.last_sign_in_at" type="text" id="last_sign_in_at"
                                                                    name="last_sign_in_at" autocomplete="last_sign_in_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Must_change_passwd
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.must_change_passwd" type="text" id="must_change_passwd"
                                                                    name="must_change_passwd" autocomplete="must_change_passwd"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Raw_app_meta_data
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.raw_app_meta_data" type="text" id="raw_app_meta_data"
                                                                    name="raw_app_meta_data" autocomplete="raw_app_meta_data"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Raw_app_meta_data
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.raw_app_meta_data" type="text" id="raw_app_meta_data"
                                                                    name="raw_app_meta_data" autocomplete="raw_app_meta_data"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Must_change_passwd
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.must_change_passwd" type="text" id="must_change_passwd"
                                                                    name="must_change_passwd" autocomplete="must_change_passwd"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Passwd_changed_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.passwd_changed_on" type="text" id="passwd_changed_on"
                                                                    name="passwd_changed_on" autocomplete="passwd_changed_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Raw_user_meta_data
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.raw_user_meta_data" type="text" id="raw_user_meta_data"
                                                                    name="raw_user_meta_data" autocomplete="raw_user_meta_data"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Raw_user_meta_data
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.raw_user_meta_data" type="text" id="raw_user_meta_data"
                                                                    name="raw_user_meta_data" autocomplete="raw_user_meta_data"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Passwd_changed_on
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.passwd_changed_on" type="text" id="passwd_changed_on"
                                                                    name="passwd_changed_on" autocomplete="passwd_changed_on"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Is_super_admin
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.is_super_admin" type="text" id="is_super_admin"
                                                                    name="is_super_admin" autocomplete="is_super_admin"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Is_super_admin
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.is_super_admin" type="text" id="is_super_admin"
                                                                    name="is_super_admin" autocomplete="is_super_admin"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone" type="text" id="phone"
                                                                    name="phone" autocomplete="phone"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone" type="text" id="phone"
                                                                    name="phone" autocomplete="phone"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_confirmed_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_confirmed_at" type="text" id="phone_confirmed_at"
                                                                    name="phone_confirmed_at" autocomplete="phone_confirmed_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_confirmed_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_confirmed_at" type="text" id="phone_confirmed_at"
                                                                    name="phone_confirmed_at" autocomplete="phone_confirmed_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_change
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_change" type="text" id="phone_change"
                                                                    name="phone_change" autocomplete="phone_change"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_change
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_change" type="text" id="phone_change"
                                                                    name="phone_change" autocomplete="phone_change"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_change_token
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_change_token" type="text" id="phone_change_token"
                                                                    name="phone_change_token" autocomplete="phone_change_token"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_change_token
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_change_token" type="text" id="phone_change_token"
                                                                    name="phone_change_token" autocomplete="phone_change_token"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_change_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_change_sent_at" type="text" id="phone_change_sent_at"
                                                                    name="phone_change_sent_at" autocomplete="phone_change_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Phone_change_sent_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.phone_change_sent_at" type="text" id="phone_change_sent_at"
                                                                    name="phone_change_sent_at" autocomplete="phone_change_sent_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Confirmed_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.confirmed_at" type="text" id="confirmed_at"
                                                                    name="confirmed_at" autocomplete="confirmed_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Confirmed_at
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.confirmed_at" type="text" id="confirmed_at"
                                                                    name="confirmed_at" autocomplete="confirmed_at"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_token_current
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_token_current" type="text" id="email_change_token_current"
                                                                    name="email_change_token_current" autocomplete="email_change_token_current"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_token_current
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_token_current" type="text" id="email_change_token_current"
                                                                    name="email_change_token_current" autocomplete="email_change_token_current"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_confirm_status
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_confirm_status" type="text" id="email_change_confirm_status"
                                                                    name="email_change_confirm_status" autocomplete="email_change_confirm_status"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="sm:col-span-6">
                                                            <label for="name"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Email_change_confirm_status
                                                            </label>
                                                            <div class="mt-1 rounded-md shadow-sm">
                                                                <input v-model="data.email_change_confirm_status" type="text" id="email_change_confirm_status"
                                                                    name="email_change_confirm_status" autocomplete="email_change_confirm_status"
                                                                    class="flex-1 focus:ring-green-500 focus:border-green-500 block w-full min-w-0 sm:text-sm border-gray-300">
                                                            </div>
                                                        </div>
                                                          
                                                     
                                                        <div class="sm:col-span-6">
                                                            <label for="about"
                                                                class="block text-sm font-medium text-gray-700">
                                                                Additional Attributes
                                                            </label>
                                                            <div class="mt-1">
                                                                <textarea v-model="data.additional_attributes" id="additional_attributes"
                                                                    name="additional_attributes" rows="3"
                                                                    class="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300"></textarea>
                                                            </div>
                                                            <p class="mt-2 text-sm text-gray-500">Anything can be stored, including rich JSON objects.
                                                                </p>
                                                        </div>
                                                        <div class="sm:col-span-6">
                                                            <Dropdownlist v-model="data.is_enabled"
                                                                @selected_item="handleSelectedInStatus"
                                                                name="is_enabled" label="Status"
                                                                :data="{'data' : [{'code' : 'true', 'name':'Published'},{'code' : 'false', 'name':'Draft'}]}"
                                                                :selected_value="data.is_enabled" />
                                                        </div>
                                                        <div class="sm:col-span-6">
                                                            <Dropdownlist v-model="data.mark_as_delete"
                                                                @selected_item="handleSelectedInMarkAsDelete"
                                                                name="mark_as_delete" label="Mark as delete?"
                                                                :data="{'data' : [{'code' : 'true', 'name':'Yes'},{'code' : 'false', 'name':'No'}]}"
                                                                :selected_value="data.mark_as_delete" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                            <span class="inline-flex rounded-md shadow-sm">
                                <button type="button"
                                    class="py-2 px-4 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                    Reset
                                </button>
                            </span>
                            <span class="inline-flex rounded-md shadow-sm">
                                <button v-on:click="upsertUsers" type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium  text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
                                    Save
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /**
     * UsersUpsert.vue
     *
     * @description :: [sails._s.capitalize(table) ] form panel to handle Add New & Edit. Panel visible and hidden managed thru event subscription.
     *                 Additional events published to handle custom functions post "Save" operation.                 
     * 
     * @author      :: Zynobot
     * @help        :: 
     *
     * Created at   :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
     * Modified at  :: Sun Feb 27 2022 11:48:01 GMT-0500 (Eastern Standard Time)
     */
    import Dropdownlist from "@/components/Dropdownlist.vue";
    export default {
        components: {
            Dropdownlist
        },
        data() {
            return {
                isUpsertUsersVisible: false,
                data: { },
                api: ""
        }
    },
    methods: {
        async upsertUsers(args) {
            try {
                if (this.$_.isUndefined(this.data.id)) {
                    const {
                        data
                    } = await this.$axios.post(this.$config.apiURL  + "Users", this.data);
                } else {
                    const {
                        data
                    } = await this.$axios.put(this.$config.apiURL  + "Users/" + this.data.id, this.data);
                }
                this.data = {}
                this.isUpsertUsersVisible = !this.isUpsertUsersVisible;
                $nuxt.$emit('evtRefreshUsersDatatable')
                this.$toast.success("Record saved successfully")
            } catch (error) {
                console.log(error)
                this.$toast.error('Oops!Save failed...')
            } finally {

            }
        },
        async deleteUsers() {
            try {
                //Make sure to set the status and delete marker
                this.data.is_enabled = false;
                //end
                const {
                    data
                } = await this.$axios.delete(this.$config.apiURL  + "Users/" + this.data.id);
                $nuxt.$emit('evtRefreshUsersDatatable')
                this.$toast.success("Record has been deleted successfully")
            } catch (error) {
                this.$toast.error('Oops! delete failed...')
            } finally {

            }
        },
        async bindUsers() {
            try {

            } catch (error) {
                console.log(error)
            }
        },
        async closeUsersPanel() {
            this.data = {}
            this.isUpsertUsersVisible = !this.isUpsertUsersVisible;
        },
        handleSelectedInStatus(data) {
            this.data.is_enabled = data;
        },
        handleSelectedInMarkAsDelete(data) {
            this.data.mark_as_delete = data;
        }
    },
    computed: { },
    mounted() {

    },
    created() {
        this.$nuxt.$on('evtUpsertUsers', (data) => {
            if (data !== undefined) {
                this.data = data;
                this.isUpsertUsersVisible = !this.isUpsertUsersVisible;
                return this.data;
            }
            this.isUpsertUsersVisible = !this.isUpsertUsersVisible;
        });

        //2) Delete Users record and then rebind datatable
        this.$nuxt.$on('evtDeleteUsers', (data) => {
            if (data !== undefined) {
                this.data = data;
                this.deleteUsers();
            }
        });
    },
    beforeDestroy() {
        this.$nuxt.$off('evtUpsertUsers');
        this.$nuxt.$off('evtDeleteUsers');
    }
};
</script>