namespace :db do
    desc 'Set done to false every night'
    task resetTasks: :environment do
        puts 'Reset Tasks ....'
        Task.where('done = ?', true).find_each do |t|
            t.update(done: t.done = false)
        end
        puts 'Done!'
    end 
end
