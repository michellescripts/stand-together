const args = ['start']
const opts = { stdio: 'inherit', cwd: 'stand-together-react', shell: true }

require('child_process').spawn('npm', args, opts)
