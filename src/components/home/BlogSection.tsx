'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import { FaLeaf } from 'react-icons/fa';

const blogPosts = [
  {
    title: '10 Eco-Friendly Cleaning Tips for a Healthier Home',
    excerpt: 'Discover natural cleaning solutions that are better for your family and the environment.',
    category: 'Green Living',
    image: '/images/hero/interior.jpeg',
    href: '/blog/eco-friendly-cleaning-tips',
    readTime: '5 min read',
  },
  {
    title: 'Why Choose Natural Cleaning Products?',
    excerpt: 'Learn about the benefits of switching to plant-based, non-toxic cleaning solutions.',
    category: 'Health & Wellness',
    image: '/images/hero/team.jpeg',
    href: '/blog/natural-cleaning-products',
    readTime: '4 min read',
  },
  {
    title: 'Spring Cleaning Checklist for Every Room',
    excerpt: 'A comprehensive guide to deep cleaning your home using sustainable methods.',
    category: 'Tips & Guides',
    image: '/images/hero/cleaner.jpeg',
    href: '/blog/spring-cleaning-checklist',
    readTime: '6 min read',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-page">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-sage font-semibold text-sm uppercase tracking-wider mb-3">
              <FaLeaf className="h-4 w-4" />
              Our Blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-heading">
              Tips for a <span className="text-accent">Greener</span> Clean
            </h2>
          </div>
          <Link
            href="/blog"
            className="mt-6 sm:mt-0 inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-forest-800 transition-colors group"
          >
            View All Posts
            <HiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.title} href={post.href} className="group h-full">
              <article className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group-hover:-translate-y-2 border border-forest-100 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Read Time */}
                  <div className="flex items-center gap-2 text-body text-sm mb-3">
                    <HiClock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-heading group-hover:text-subheading transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-body text-sm line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-sage text-sm font-medium group-hover:text-sage-dark mt-auto">
                    Read Article
                    <HiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
