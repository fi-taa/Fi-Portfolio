import ProjectCard from '../components/ProjectCard'

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/640x360',
      url : 'https://www.example.com/project1',
    },
    {
    title: 'Project 2',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: 'https://via.placeholder.com/640x360',
    url: 'https://www.example.com/project2',
    },
    {
    title: 'Project 3',
    description: 'Sed et dapibus nisl. Vestibulum quis elementum ex, ac tristique velit.',
    imageUrl: 'https://via.placeholder.com/640x360',
    url: 'https://www.example.com/project3',
    },
    {
        title: 'Project 3',
        description: 'Sed et dapibus nisl. Vestibulum quis elementum ex, ac tristique velit.',
        imageUrl: 'https://via.placeholder.com/640x360',
        url: 'https://www.example.com/project3',
        },
        {
            title: 'Project 3',
            description: 'Sed et dapibus nisl. Vestibulum quis elementum ex, ac tristique velit.',
            imageUrl: 'https://via.placeholder.com/640x360',
            url: 'https://www.example.com/project3',
            },
            {
                title: 'Project 3',
                description: 'Sed et dapibus nisl. Vestibulum quis elementum ex, ac tristique velit.',
                imageUrl: 'https://via.placeholder.com/640x360',
                url: 'https://www.example.com/project3',
                },
    ]
    
    return (
    <div className="container  py-4 px-12">
    <h2 className="text-2xl font-bold mb-4">My Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {projects.map((project) => (
    <ProjectCard key={project.title} project={project} />
    ))}
    </div>
    </div>
    )
    }
    
    export default Projects