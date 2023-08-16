import React, { useState } from 'react'

const Plans = () => {
  const plans = [
    {
      id: 1,
      name: 'Premium',
      resolution: '4K + HDR',
      price: 2900,
      features: [
        'Monthly price',
        'Resolution',
        'Video quality',
        'Supported devices',
      ],
    },
    {
      id: 2,
      name: 'Standard',
      resolution: '1080p',
      price: 3600,
      features: [
        'Monthly price',
        'Resolution',
        'Video quality',
        'Supported devices',
      ],
    },
    {
      id: 3,
      name: 'Basic',
      resolution: '720p',
      price: 2900,
      features: [
        'Monthly price',
        'Resolution',
        'Video quality',
        'Supported devices',
      ],
    },
    {
      id: 4,
      name: 'Mobile',
      resolution: '480p',
      price: 1200,
      features: [
        'Monthly price',
        'Resolution',
        'Video quality',
        'Supported devices',
      ],
    },
  ]

  const [selectedPlan, setSelectedPlan] = useState(plans[0])

  return (
    <div className="w-full flex flex-col items-center">
      <p className="text-gray-500 uppercase">step 2 of 3</p>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold">Choose your plan.</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`w-full flex flex-col items-center border-2 border-gray-200 rounded-md p-4 ${
              plan.id === 1 ? 'bg-gray-100' : ''
            }`}
          >
            <h1 className="text-xl font-bold">{plan.name}</h1>
            <p className="text-gray-500">{plan.resolution}</p>
            <p className="text-gray-500">N{plan.price}</p>
            <button
              className={`w-full mt-4 py-2 px-4 rounded-md ${
                plan.id === 1
                  ? 'bg-gray-800 text-white'
                  : 'bg-red-500 text-white'
              }`}
            >
              {plan.id === 1 ? 'Current Package' : 'Subscribe'}
            </button>
            <div className="w-full mt-4">
              <ul className="w-full">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="w-full flex justify-between py-2 border-b border-gray-200"
                  >
                    <p className="text-gray-500">{feature}</p>
                    <p className="text-gray-500">
                      {feature === 'Monthly price'
                        ? `$${plan.price / 100}`
                        : feature === 'Resolution'
                        ? plan.resolution
                        : feature === 'Video quality'
                        ? 'High'
                        : 'All'}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
