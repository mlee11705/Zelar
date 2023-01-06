import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/authentication',
    name: '2022 Top DevOps Resources ',
    description: 'A resource bundle every DevOps pro needs 🚀 Free DevOps Courses and Tutorials for Beginners and Intermediates 🚀 Top 2022 Kubernetes Courses 🚀 Top 180 Kubernetes Tools for DevOps Engineers 🚀 2400+ Questions and Exercises for DevOps Interviews by Arie Bregman',
  },
  {
    href: '/pagination',
    name: 'Top Kubernetes Blogs, Slack Communities, Journals, and Podcasts',
    description: 'Kubernetes can be complex and frustrating to use, especially for beginners. Fortunately, the growing developer community offers plenty of Kubernetes-focused blogs, podcasts, journals, and newsletters that give advice and answer urgent questions.',
  },
  {
    href: '/errors',
    name: 'Free DevOps Courses and Tutorials for Beginners and Intermediate',
    description:
      'A collection of the best free resources to learn Docker, Kubernetes, Jenkins, Maven, Ansible, and other essential DevOps Courses to become a DevOps engineer in 2022. With DevOps, companies deploy codes 30 times faster than before.',
  },
  {
    href: '/webhooks',
    name: '150+ Remote DevOps Jobs',
    description:
      'LDevOps engineer ranks #2 on Glassdoor’s 50 Best Jobs in America rankings. 60% of hiring managers are looking to fill DevOps engineer positions, according to a study by The Linux Foundation and tech jobs site Dice. I’m sharing DevOps jobs you can work for remotely and earn a 6-figure salary.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides" className="text-4xl">
        Trending Articles
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <div class="mt-12 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">Vasu Maganti</span>
              <img class="h-10 w-10 rounded-full" src="https://media.licdn.com/dms/image/C5603AQEJcW8iICWwhA/profile-displayphoto-shrink_100_100/0/1623872570108?e=1678320000&v=beta&t=F-UD1iVZbkw4T9AdwZ3qc442EnigtD6FcenCJiWgpbs" alt=""/>
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-white my-0">
              <a href="#">Vasu Maganti</a>
              <span aria-hidden="true">&middot;</span>
              <span>CEO</span>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">Mar 16, 2020</time>
              <span aria-hidden="true">&middot;</span>
              <span>182 likes</span>
            </div>
          </div>
        </div>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
