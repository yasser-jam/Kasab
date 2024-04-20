<template>
    <div class="container min-h-screen px-16">
        <div class="grid grid-cols-2 items-center h-full gap-8 mt-24">

            <div class="max-w-[500px]">
                <img src="./../assets/images/auth/login.svg" alt="login">
            </div>


            <div>

                <div class="max-w-[200px]">
                </div>

                <div class="text-4xl font-bold text-neutral-content mb-8">Login Now!</div>
    
                <div class="grid grid-cols-2 gap-4">
                    
                    <div>
                        <base-label>First Name</base-label>
                        <base-input></base-input>
                    </div>

                    <div>
                        <base-label>Last Name</base-label>
                        <base-input></base-input>
                    </div>

                    <div>
                        <base-label>Password</base-label>
                        <base-input></base-input>
                    </div>

                    <div>
                        <base-label>Confirm Password</base-label>
                        <base-input></base-input>
                    </div>

                </div>

                <div class="mt-12">
                    <base-btn class="btn-block mb-4">Signup</base-btn>
                    <base-btn class="btn-outline btn-block mb-4">Sign-up Google</base-btn>
                </div>
            </div>

        </div>
    </div>
</template>