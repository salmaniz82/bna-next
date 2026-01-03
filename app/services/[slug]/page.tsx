import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
    const params = await props.params;
    const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
      title: `${title} - BNA Consulting`,
      description: `Learn more about our ${title} services.`,
    };
  }

export default async function ServiceDetail(props: { params: Params }) {
  const params = await props.params;
  // Format slug into a readable title
  // e.g., "bookkeeping" -> "Bookkeeping", "formation" -> "Formation"
  const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/services" 
            className="inline-flex items-center text-primary font-semibold mb-8 hover:underline"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>

          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              {title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="lead text-xl mb-6">
                Our {title} services are designed to help your business thrive. 
                This page is currently under construction as we prepare detailed information about this service.
              </p>
              
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Interested in this service?</h3>
                <p className="mb-4">
                  Please contact our team directly to discuss your requirements.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              <p>
                We appreciate your patience. Check back soon for full details!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
