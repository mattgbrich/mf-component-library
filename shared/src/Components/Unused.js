import React, { useState } from 'react';

function Unused (props) {
  const [data, setData] = useState([]);

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <h1>USELESS GRID</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MainUnused = props => <Unused {...props} />;

export default Unused;