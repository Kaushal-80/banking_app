import HeaderBox from '@/components/HeaderBox'
import RightSIdebar from '@/components/RightSIdebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "Kaushal", lastName: "Bhiwapurkar", email:"kaushalbhiwapurkar1@gmail.com"};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext ="Access and manage your account and transaction efficiently."
                />

                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                />
            </header>

            RECENT TRANSACTION
        </div>

        <RightSIdebar 
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 507.50}]}
        />
    </section>
  )
}

export default Home