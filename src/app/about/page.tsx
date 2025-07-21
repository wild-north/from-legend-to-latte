'use client';

import React from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
        
        <header className="text-center mb-20 border-b border-gray-100 pb-20">
          <h1 className="text-6xl font-light text-gray-900 mb-8 tracking-tight">
            <FormattedMessage id="about.title" />
          </h1>
          <div className="h-px bg-gray-300 w-24 mx-auto"></div>
        </header>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              <FormattedMessage id="about.ourStory" />
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              <FormattedMessage 
                id="about.welcome"
                values={{
                  strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>
                }}
              />
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-12">
              <FormattedMessage id="about.whatWeCover" />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">
                  <FormattedMessage id="about.history.title" />
                </h3>
                <div className="w-12 h-px bg-gray-300"></div>
                <p className="text-gray-600 font-light">
                  <FormattedMessage id="about.history.description" />
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">
                  <FormattedMessage id="about.culture.title" />
                </h3>
                <div className="w-12 h-px bg-gray-300"></div>
                <p className="text-gray-600 font-light">
                  <FormattedMessage id="about.culture.description" />
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 font-medium">
                  <FormattedMessage id="about.innovation.title" />
                </h3>
                <div className="w-12 h-px bg-gray-300"></div>
                <p className="text-gray-600 font-light">
                  <FormattedMessage id="about.innovation.description" />
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-100 pt-16">
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              <FormattedMessage id="about.mission" />
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              <FormattedMessage id="about.community" />
            </p>
          </section>

          <section className="bg-gray-50 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              <FormattedMessage id="about.startJourney" />
            </h3>
            
            <Link
              href="/articles"
              className="inline-block mt-6 text-sm uppercase tracking-widest border-b-2 border-gray-900 text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors pb-1 font-medium"
            >
              <FormattedMessage id="about.exploreArticles" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
} 