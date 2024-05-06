//Element for selecting to show visualisers
const eyeIcon = document.getElementById('eye-icon');
              const dropdownMenu = document.getElementById('visualization-dropdown');
              const staffVisualizer = document.getElementById('myStaffVisualizerB');
              const waterfallVisualizer = document.getElementById('myWaterVisualizer');
              const showStaffCheckbox = document.getElementById('show-staff');
              const showWaterfallCheckbox = document.getElementById('show-waterfall');
              const midiPlayer = document.querySelector('midi-player');
          
              eyeIcon.addEventListener('click', () => {
                dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
              });
          
              showStaffCheckbox.addEventListener('change', () => {
                staffVisualizer.style.display = showStaffCheckbox.checked ? 'block' : 'none';
                updateVisualizerAttribute();
              });
          
              showWaterfallCheckbox.addEventListener('change', () => {
                waterfallVisualizer.style.display = showWaterfallCheckbox.checked ? 'block' : 'none';
                updateVisualizerAttribute();
              });
          
              //making a function to push visualiser into midiplayer attribute based on selection
              function updateVisualizerAttribute() {
                const visualizerIds = [];
          
                if (showStaffCheckbox.checked) {
                  visualizerIds.push('#myStaffVisualizerB');
                }
          
                if (showWaterfallCheckbox.checked) {
                  visualizerIds.push('#myWaterVisualizer');
                }
          
                midiPlayer.setAttribute('visualizer', visualizerIds.join(','));
              }
          
              // Call 
              updateVisualizerAttribute();