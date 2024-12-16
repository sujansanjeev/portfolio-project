import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
        
        <div className="space-y-6">
          {/* University Education */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="font-bold text-2xl mb-2 text-gray-900">Shiv Nadar University, Chennai</h4>
            <p className="text-lg text-gray-700 mb-2">B.Tech. in Computer Science and Engineering - Internet of Things</p>
            <div className="flex justify-between text-gray-600">
              <span>2021 - 2025 (Expected)</span>
              <span>CGPA: 8.0/10.0</span>
            </div>
          </div>

          {/* 12th Grade */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="font-bold text-2xl mb-2 text-gray-900">M.L.M Mamallan Matriculation Higher Secondary School</h4>
            <p className="text-lg text-gray-700 mb-2">12th Grade, Tamil Nadu State Board</p>
            <div className="flex justify-between text-gray-600">
              <span>2021</span>
              <span>Percentage: 92%</span>
            </div>
          </div>

          {/* 10th Grade */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h4 className="font-bold text-2xl mb-2 text-gray-900">M.L.M Mamallan Matriculation Higher Secondary School</h4>
            <p className="text-lg text-gray-700 mb-2">10th Grade, Tamil Nadu State Board</p>
            <div className="flex justify-between text-gray-600">
              <span>2019</span>
              <span>Percentage: 90%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;